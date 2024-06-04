import mongoose from "mongoose";

const YearlyBalanceSchema = new mongoose.Schema({
  balance: {
    type: String,
    required: true,
  },
  date: Date,
});

export const YearlyBalance = mongoose.model(
  "YearlyBalanceModel",
  YearlyBalanceSchema
);
