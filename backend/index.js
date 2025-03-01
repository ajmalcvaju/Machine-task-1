const express = require("express");
const connectDB = require('./config/db');
const cors = require("cors");
require("dotenv").config();
const parsingRoutes= require('./routes/parsingRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

connectDB()


// Middleware
app.use(cors());
app.use(express.json());

app.use('/api/parsed-data', parsingRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
