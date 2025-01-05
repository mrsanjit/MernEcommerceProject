const mongoose = require('mongoose');

const dbConnect = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI is not defined');
    }
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log('Database Connected Successfully');
  } catch (error) {
    console.error(`Database connection error: ${error.message}`, error);
  }
};

module.exports = dbConnect;

