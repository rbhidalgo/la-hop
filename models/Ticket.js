const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema({
  address: { type: String },
  location: { type: String },
  date: { type: Date },
  peopleCount: { type: Number },
  peopleNames: { type: String },
  physicalDescript: { type: String },
  needsDescript: { type: String },
  tags: [{ type: String }],
  name: { type: String },
  org: { type: String },
  selfDescript: { type: String },
  email: { type: String },
  phone: { type: String },
  agreement: { type: Boolean }
});

module.exports = mongoose.model("Ticket", TicketSchema);
