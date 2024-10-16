const express = require('express');
const app = express();
const sequelize = require('./config/db');
const user_estate_Byid = require('../src/routes/user-estate.route');
const userdetails_Byid = require('../src/routes/userdetails.route');
const estateamenities = require('../src/routes/get_owner_amenities');
const estateutilities = require('../src/routes/get_owner_utlities');
const cors = require('cors');

// Enable CORS (Allow requests from any origin)
app.use(cors());

// Parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Define routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use("/api/v1/user-estates", user_estate_Byid);
app.use("/api/v1/user-details", userdetails_Byid);
app.use("/api/v1/estate-amenities", estateamenities);
app.use("/api/v1/estate-utilities", estateutilities);

// Start the server
app.listen(3000, async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        console.log('Server started on port 3000');
    } catch (error) {
        console.log('Unable to connect to the database:', error);
    }
});
