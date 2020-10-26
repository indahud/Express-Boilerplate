const mongoose = require("mongoose");

const ExpenseEntrySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    note: {
      type: String,
      required: true,
    },
    expenseDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const ExpenseEntry = mongoose.model('ExpenseEntry', ExpenseEntrySchema);

module.exports = ExpenseEntry;