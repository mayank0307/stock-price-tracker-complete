# Stock Price Tracker Complete

This repository contains both the frontend and backend projects for the Stock Price Tracker application. The frontend is built with React, and the backend is built with Node.js and Express.

## Project Structure

- **/stock-price-tracker**: Contains the backend API and services.
- **/stock-price-tracker-frontend**: https://github.com/mayank0307/stock-price-tracker-frontend/tree/main

## Prerequisites

- Node.js (v14 or higher recommended)
- MongoDB (local or cloud instance)

## Installation and Setup

### Backend Setup

1. **Navigate to the Backend Directory**

   ```bash
   cd stock-price-tracke
Install Dependencies

Ensure you are in the backend directory and run:

bash
Copy code
npm install
Create a .env File

Create a .env file in the backend directory with the following content:

env
Copy code
PORT=5000
MONGO_URI=your_mongodb_connection_string
API_ACCESS_TOKEN=your_livecoinwatch_api_token
Replace your_mongodb_connection_string with your MongoDB connection string and your_livecoinwatch_api_token with your LiveCoinWatch API token.

Start the Backend Server

bash
Copy code
npm start
The backend server will be available at http://localhost:5000.

Frontend Setup
Navigate to the Frontend Directory

bash
Copy code
cd ../frontend
Install Dependencies

Ensure you are in the frontend directory and run:

bash
Copy code
npm install
Start the Frontend Application

bash
Copy code
npm start
The frontend application will be available at http://localhost:3000.

Usage
Open the Frontend Application

Visit http://localhost:3000 in your web browser to view and interact with the stock price tracker.

Backend API

Endpoint: GET /api/prices
Description: Retrieves the most recent stock prices.
Query Parameters:
symbol: (Optional) The symbol of the stock to filter results (e.g., BTC).
Example Request:

bash
Copy code
curl 'http://localhost:5000/api/prices?symbol=BTC'
Development
Backend
Fetch Data: The backend fetches stock data every 5 seconds from the LiveCoinWatch API and stores it in MongoDB.
Endpoint: /api/prices retrieves the latest stock prices, filtered by symbol.
Frontend
Price Table: Displays the latest stock prices in a table format.
Data Fetching: Uses Redux to fetch and manage stock price data from the backend.
Notes
Ensure MongoDB is running and accessible via the connection string specified in the .env file.
For production, configure environment variables and set up a production database.
Make sure to handle CORS issues if the frontend and backend are served from different domains.

SS :

<img width="996" alt="Screenshot 2024-08-04 at 11 44 21 PM" src="https://github.com/user-attachments/assets/0f457e0e-ce81-4dd7-8be4-0e75d454dbcf">
<img width="996" alt="Screenshot 2024-08-05 at 12 00 40 AM" src="https://github.com/user-attachments/assets/c09a5c4c-f785-47a4-a6fd-8893ad7d9a59">


bash
Copy code
git add README.md
git commit -m "Add detailed README with setup instructions"
git push origin main
This README provides a comprehensive guide to setting up, running, and contributing to your project, ensuring that others can easily understand and use your code.
