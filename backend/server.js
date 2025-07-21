const express = require('express');
const cors = require('cors');
const weatherRoutes = require('./routes/weather');
require('dotenv').config();

const app = express();
app.use(cors());

// Register weather routes
app.use('/api/weather', weatherRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
