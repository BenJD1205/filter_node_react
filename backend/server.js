require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');
const myRoute = require('./routes/bootcampRoutes');

connectDB();

const app = express();

//middleware
app.use(express.json())

//routes
app.use('/api/v1/bootcamps', myRoute)

//Error handler
app.use(errorHandler)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Sever is running on ${PORT}`))