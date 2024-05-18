const express = require('express');
const Property = require('../models/Property');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, async (req, res) => {
    const { place, area, bedrooms, bathrooms, nearbyFacilities } = req.body;
    try {
        const property = new Property({ place, area, bedrooms, bathrooms, nearbyFacilities, seller: req.userId });
        await property.save();
        res.status(201).json({ message: 'Property posted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/', async (req, res)
