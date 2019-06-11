const express = require("express");
const router = express.Router();

const Ticket = require("../models/Ticket");

// Creating a ticket request
router.post("/create", async (req, res) => {
  console.log("create post route hit");
  try {
    const createdTicket = await Ticket.create(req.body);
    if (createdTicket) {
      res.json({
        ticket: createdTicket,
        success: true,
        message: "Ticket successfully submitted."
      });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
