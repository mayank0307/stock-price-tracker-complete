import express from 'express';
import mongoose, { Query } from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';  // Import cors
import { fetchData } from './services/pollData';
import Price from './models/Price'; // Import the Price model

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI!, {})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(express.json());
app.use(cors()); // Use cors middleware

// Route to fetch data from the database
app.get('/api/prices', async (req, res) => {
  try {
    const { symbol } = req.query; // Get the symbol from query params
    let query = {};

    // If a symbol is provided, filter by that symbol
    if (typeof symbol === 'string') {
      query = { symbol }; 
    }

    // Retrieve the most recent 5 data entries based on the symbol filter
    const prices = await Price.find(query).limit(20).sort({timestamp:-1})
    res.json(prices);
  } catch (error) {
    res.status(500).send('Error fetching prices');
  }
});

// Periodically fetch data
const startDataFetchInterval = () => {
  setInterval(async () => {
    try {
      await fetchData();
      console.log('Data fetched and updated');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, 5000); // Fetch every 5 seconds
};

startDataFetchInterval();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
