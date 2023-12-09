const prisma = require('../config/prisma');

    // Ambil semua data customer dari database
async function getAllTransaction() {
  try {
    const transaction = await prisma.transaction.findMany();

    return {
      message: 'Transaction retrieved successfully',
      transaction,
    };
  } catch (error) {
    console.error('Error retrieving customers:', error);
    throw {
      status: 500,
      message: 'Internal Server Error',
      error: error.message,
    };
  }
}

// membuat data baru customers
async function createTransaction(transactionData) {
  try {
    const transaction = await prisma.transaction.create({
      data: transactionData,
    });
    return {
      message: 'Transaction created successfully',
      customer,
    };
  } catch (error) {
    console.error('Error creating Customer:', error);
    throw {
      status: 500,
      message: 'Internal Server Error',
      error: error.message,
    };
  }
}

module.exports = {
  getAllTransaction,
  createTransaction,
};