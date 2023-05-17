import express from "express";
import mysql from "mysql";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "donovandcastaneda",
  password: "June1$t61",
  database: "sys",
});

app.get("/", (req,res)=>{
    const q = "SELECT * FROM names"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/name", (req,res)=>{
    res.json("hello this is the backend")
})
app.listen(8800, () => {
  console.log("connected to backend!");
});
