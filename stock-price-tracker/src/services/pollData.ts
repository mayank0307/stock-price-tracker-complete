// src/services/pollData.ts
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
import Price from '../models/Price';
import { Coin } from '../types'; // Ensure this matches your Coin type

let offset = 0;

export const fetchData = async () => {
  try {
    const response = await axios.post(
      'https://api.livecoinwatch.com/coins/list',
      {
        currency: 'USD',
        sort: 'rank',
        order: 'ascending',
        offset: 0,
        limit: 5, // Ensure this matches your needs
        meta: false
      },
      {
        headers: {
          'content-type': 'application/json',
          'x-api-key': process.env.API_ACCESS_TOKEN
        }
      }
    );

    const data: Coin[] = response.data; // Data is an array of Coin
console.log(data);

    // Process and save data to MongoDB
    await Promise.all(data.map(async (coin: Coin) => {
      const price = new Price({
        symbol: coin.code, // Ensure this matches the key from your response
        rate: coin.rate,
        volume: coin.volume,
        cap: coin.cap,
        delta: coin.delta,
        timestamp: new Date() // Add timestamp
      });
      await price.save();
    }));

    // Increment the offset
    offset += 5; // Adjust this based on your `limit` parameter
  } catch (error) {
    console.error('Error fetching data', error);
  }
};

// Set interval to call fetchData every 5 seconds
setInterval(fetchData, 5000);
