import mongoose from "mongoose";

const boxerSchema = new mongoose.Schema({
  name: String,
  age: Number,
  desc: String,
  image: String
});

const coachSchema = new mongoose.Schema({
  name: String,
  desc: String,
  image: String
});

const eventSchema = new mongoose.Schema({
  name: String,
  desc: String,
  image: String,
  date: Date,
  location: String
});

const Boxer = mongoose.model('Boxer', boxerSchema);
const Coach = mongoose.model('Coach', coachSchema);
const Event = mongoose.model('Event', eventSchema);

export { Boxer, Coach, Event };
