const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema({
  address: { type: String, required: true },
  local: { type: String },
  date: { type: Date, required: true },
  peopleCount: { type: Number, required: true },
  peopleNames: { type: String },
  phyiscalDescript: { type: String, required: true },
  needsDescript: { type: String },
  tags: [{ type: String }],
  name: { type: String },
  org: { type: String },
  selfDescript: { type: String },
  email: { type: String },
  phone: { type: String },
  agreement: { type: Boolean }
});
