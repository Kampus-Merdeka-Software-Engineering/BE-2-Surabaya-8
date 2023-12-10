const prisma = require('../config/prisma');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const transactionService = require('../services/transactionService');

// MENDAPATKAN SEMUA DATA TRANSACTION
async function getAllTransaction(req, res) {
  const transaction = await transactionService.getAllTransaction();
  res.json(transaction);
}

// MEMBUAT DATA TRANSACTION
async function createTransaction(req, res) {
  const transactionData = req.body;
  const transaction = await transactionService.createTransaction(transactionData);
  res.json(transaction);
}


module.exports = {
  getAllTransaction,
  createTransaction,
};

