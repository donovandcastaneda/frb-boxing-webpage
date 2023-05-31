import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import multer from "multer";
import path from "path";
import fs from "fs";
import util from "util";
import * as dotenv from "dotenv";
import { Boxer, Coach, Event } from "./models/dataModels.js";
dotenv.config();

const app = express();

mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connection established");
    app.listen(8800, () => {
      console.log("connected to backend!");
    });
  })
  .catch((err) => console.log("Error in MongoDB connection: ", err));

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10000000, // allows up to 10 MB
  },
});
``;

// Boxers
app.get("/boxers/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const boxer = await Boxer.findById(id);
    res.status(200).json(boxer);
  } catch (err) {
    res.status(500).json({ Message: "Error", Error: err.message });
  }
});

app.post("/boxers", upload.single("image"), async (req, res) => {
  try {
    const boxer = new Boxer({
      name: req.body.name,
      age: req.body.age,
      desc: req.body.desc,
      image: req.file.filename, // get filename from req.file, not req.body
    });
    await boxer.save();
    res.status(200).json(boxer);
  } catch (err) {
    res.status(500).json({ Message: "Error", Error: err.message });
  }
});

app.delete("/boxers/:id", async (req, res) => {
  try {
    await Boxer.findByIdAndRemove(req.params.id);
    res.json("Boxer has been deleted.");
  } catch (err) {
    res.json(err);
  }
});

app.put("/boxers/:id", upload.single('image'), async (req, res) => {
  try {
    const { id } = req.params;
    const boxerUpdate = {
      name: req.body.name,
      age: req.body.age,
      desc: req.body.desc,
      image: req.file ? req.file.filename : undefined,
    };
    const updatedBoxer = await Boxer.findByIdAndUpdate(id, boxerUpdate, { new: true });
    if (!updatedBoxer) {
      return res.status(404).json({ message: "Cannot find the boxer" });
    }
    return res.status(200).json(updatedBoxer);
  } catch (err) {
    res.status(500).json({ Message: "Error", Error: err.message });
  }
});


// Coaches
app.get("/coaches/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const coach = await Coach.findById(id);
    res.status(200).json(coach);
  } catch (err) {
    res.status(500).json({ Message: "Error", Error: err.message });
  }
});

app.post("/coaches", upload.single("image"), async (req, res) => {
  try {
    const coach = new Coach({
      name: req.body.name,
      desc: req.body.desc,
      image: req.file.filename, // get filename from req.file, not req.body
    });
    await coach.save();
    res.status(200).json(coach);
  } catch (err) {
    res.status(500).json({ Message: "Error", Error: err.message });
  }
});

app.delete("/coaches/:id", async (req, res) => {
  try {
    await Coach.findByIdAndRemove(req.params.id);
    res.json("Coach has been deleted.");
  } catch (err) {
    res.status(500).json({ Message: "Error", Error: err.message });
  }
});

app.put("/coaches/:id", upload.single('image'), async (req, res) => {
  try {
    const { id } = req.params;
    const coachUpdate = {
      name: req.body.name,
      desc: req.body.desc,
      image: req.file ? req.file.filename : undefined,
    };
    const updatedCoach = await Coach.findByIdAndUpdate(id, coachUpdate, { new: true });
    if (!updatedCoach) {
      return res.status(404).json({ message: "Cannot find the coach" });
    }
    return res.status(200).json(updatedCoach);
  } catch (err) {
    res.status(500).json({ Message: "Error", Error: err.message });
  }
});


// Events
app.get("/events/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findById(id);
    res.status(200).json(event);
  } catch (err) {
    res.status(500).json({ Message: "Error", Error: err.message });
  }
});

app.post("/events", upload.single("image"), async (req, res) => {
  try {
    const event = new Event({
      name: req.body.name,
      desc: req.body.desc,
      image: req.file.filename, // get filename from req.file, not req.body
      date: req.body.date,
      location: req.body.location,
    });
    await event.save();
    res.status(200).json(event);
  } catch (err) {
    res.status(500).json({ Message: "Error", Error: err.message });
  }
});

app.delete("/events/:id", async (req, res) => {
  try {
    await Event.findByIdAndRemove(req.params.id);
    res.json("Event has been deleted.");
  } catch (err) {
    res.status(500).json({ Message: "Error", Error: err.message });
  }
});

app.put("/events/:id", upload.single('image'), async (req, res) => {
  try {
    const { id } = req.params;
    const eventUpdate = {
      name: req.body.name,
      desc: req.body.desc,
      image: req.file ? req.file.filename : undefined,
      date: req.body.date,
      location: req.body.location,
    };
    const updatedEvent = await Event.findByIdAndUpdate(id, eventUpdate, { new: true });
    if (!updatedEvent) {
      return res.status(404).json({ message: "Cannot find the event" });
    }
    return res.status(200).json(updatedEvent);
  } catch (err) {
    res.status(500).json({ Message: "Error", Error: err.message });
  }
});
