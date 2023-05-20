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

app.use(express.json());
app.use(cors());



app.get("/boxers", (req, res) => {
  const q = "SELECT * FROM frb.boxers";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});



app.post("/boxers", (req, res) => {
  const q = "INSERT INTO boxers (`name`,`age`,`desc`,`image`) VALUES (?)";
  const values = [req.body.name, req.body.age, req.body.desc, req.body.image];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("boxer has been created");
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
  const q = "UPDATE boxers SET `name`= ?, `desc`= ?, `image`= ?, `age`= ? WHERE id = ?";
  const values = [req.body.name, req.body.desc, req.body.image, req.body.age];

  db.query(q, [...values, boxerId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Boxer has been updated.");
  });
});



app.listen(8800, () => {
  console.log("connected to backend!");
});
