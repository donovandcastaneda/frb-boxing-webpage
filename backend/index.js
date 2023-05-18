import express from "express";
import mysql2 from "mysql2";
import cors from "cors";

const app = express();

const db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "June1$t61",
  database: "frb",
});

app.get("/boxers", (req, res) => {
  const q = "SELECT * FROM frb.boxers";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.use(express.json());
app.use(cors());

app.post("/boxers", (req, res) => {
  const q = "INSERT INTO boxers (`name`,`desc`,`image`) VALUES (?)";
  const values = [req.body.name, req.body.desc, req.body.image];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("boxer has been created");
  });
});

app.get("/", (req, res) => {
  res.json("hello this is the backend");
});
app.listen(8800, () => {
  console.log("connected to backend!");
});
