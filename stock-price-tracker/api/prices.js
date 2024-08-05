// backend/api/prices.js (or another relevant endpoint file)

import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import { connectToDatabase } from '../../utils/mongodb';
import { Price } from '../../models/Price'; // Adjust path as needed

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectToDatabase();
    
    const symbol = req.query.symbol || 'BTC'; // Default to 'BTC' if no symbol provided

    const prices = await Price.find({ symbol }).sort({ timestamp: -1 }).limit(5).exec();

    res.status(200).json(prices);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};

export default handler;
