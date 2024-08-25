const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./connect/database");

const port = process.env.PORT || 5000;

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/tasks', require('./routes/taskRoutes'));

app.listen(port, () => console.log(`Server listening on ${port}`));