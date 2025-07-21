const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

const apiKey = process.env.OPENWEATHER_API_KEY;

/**
 * Get weather by city name
 * Example: /api/weather/London
 */
router.get('/:city', async (req, res) => {
    const city = req.params.city;
    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'City not found or API error' });
    }
});

/**
 * Get weather by geographic coordinates
 * Example: /api/weather/geo?lat=51.5074&lon=-0.1278
 */
router.get('/geo', async (req, res) => {
    const { lat, lon } = req.query;
    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch weather by coordinates' });
    }
});

module.exports = router;
