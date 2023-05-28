import express from "express";
import mysql2 from "mysql2";
import cors from "cors";
import multer from "multer";
import path from "path";
import fs from "fs";
import util from "util";
import { PNG } from "pngjs";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();

const db = mysql2.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});


db.on("error", function (err) {
  console.error("Error connecting to database: ", err);
  // Handle or report error, and perhaps try reconnecting
});

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

//boxers

app.get("/boxers", (req, res) => {
  const q = "SELECT * FROM frb.boxers";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/boxers", upload.single("image"), async (req, res) => {
  let image = req.file.filename;
  const q = "INSERT INTO boxers (`name`,`age`,`desc`,`image`) VALUES (?)";
  const values = [req.body.name, req.body.age, req.body.desc, image];

  db.query(q, [values], (err, data) => {
    if (err) return res.json({ Message: "Error", Error: err.message });
    return res.json({ Status: "Success" });
  });
});

app.delete("/boxers/:id", (req, res) => {
  const boxerId = req.params.id;
  const q = "DELETE FROM boxers WHERE id = ?";

  db.query(q, [boxerId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Boxer has been deleted.");
  });
});

app.put("/boxers/:id", (req, res) => {
  const boxerId = req.params.id;
  const q =
    "UPDATE boxers SET `name`= ?, `desc`= ?, `image`= ?, `age`= ? WHERE id = ?";
  const values = [req.body.name, req.body.desc, req.body.image, req.body.age];

  db.query(q, [...values, boxerId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Boxer has been updated.");
  });
});

//coaches

app.get("/coaches", (req, res) => {
  const q = "SELECT * FROM frb.coaches";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/coaches", (req, res) => {
  const q = "INSERT INTO coaches (`name`,`desc`,`image`) VALUES (?)";
  const values = [req.body.name, req.body.desc, req.body.image];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("coach has been created");
  });
});

app.delete("/coaches/:id", (req, res) => {
  const coachId = req.params.id;
  const q = "DELETE FROM coaches WHERE id = ?";

  db.query(q, [coachId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Coach has been deleted.");
  });
});

app.put("/coaches/:id", (req, res) => {
  const coacheId = req.params.id;
  const q = "UPDATE coaches SET `name`= ?, `desc`= ?, `image`= ? WHERE id = ?";
  const values = [req.body.name, req.body.desc, req.body.image];

  db.query(q, [...values, coacheId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Coach has been updated.");
  });
});

//events

app.get("/events", (req, res) => {
  const q = "SELECT * FROM frb.events";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/events", (req, res) => {
  const q =
    "INSERT INTO events (`name`,`desc`,`image`,`date`,`location`) VALUES (?)";
  const values = [
    req.body.name,
    req.body.desc,
    req.body.image,
    req.body.date,
    req.body.location,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Event has been created");
  });
});

app.delete("/events/:id", (req, res) => {
  const eventId = req.params.id;
  const q = "DELETE FROM events WHERE id = ?";

  db.query(q, [eventId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Event has been deleted.");
  });
});

app.put("/events/:id", (req, res) => {
  const eventId = req.params.id;
  const q =
    "UPDATE events SET `name`= ?, `desc`= ?, `image`= ?,`date`= ?,`location`= ?  WHERE id = ?";
  const values = [
    req.body.name,
    req.body.desc,
    req.body.image,
    req.body.date,
    req.body.location,
  ];

  db.query(q, [...values, eventId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Event has been updated.");
  });
});

app.listen(8800, () => {
  console.log("connected to backend!");
});
