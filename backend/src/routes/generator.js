const express = require('express');
const router = express.Router();
const { generateRandomName, generateRandomEmail, generateRandomCombination, generateRandomAnimal } = require('../utils/randomGenerator');

router.get('/name', (req, res) => {
    const randomName = generateRandomName();
    res.json({ name: randomName });
});

router.get('/email', (req, res) => {
    const randomEmail = generateRandomEmail();
    res.json({ email: randomEmail });
});

router.get('/animal', (req, res) => {
    const randomAnimal = generateRandomAnimal();
    res.json({ animal: randomAnimal });
});


router.get('/combo', async (req, res) => {
    try {
        const combination = await generateRandomCombination();
        res.json({ combination });
    } catch (error) {
        res.status(500).json({ error: 'Failed to generate combination' });
    }
});

module.exports = router;