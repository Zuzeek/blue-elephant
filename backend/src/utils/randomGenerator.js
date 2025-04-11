const axios = require('axios');

const domains = ["hotmail.com", "gmail.com", "demo.com", "sample.com"];

const firstNames = ["John", "Jane", "Alex", "Emily", "Chris", "Katie", "Michael", "Sarah", "David", "Laura", "James", "Jessica", "Daniel", "Ashley", "Matthew", "Amanda", "Joshua", "Megan", "Andrew", "Nicole"];
const lastNames = ["Doe", "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson"];

const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange', 'Pink', 'Brown', 'Black', 'White', 'Gray', 'Cyan', 'Magenta', 'Lime', 'Teal', 'Navy', 'Maroon', 'Olive', 'Coral', 'Salmon', 'Turquoise', 'Lavender', 'Peach', 'Mint', 'Crimson', 'Indigo', 'Violet', 'Gold', 'Silver', 'Bronze'];
const animals = ['Lion', 'Tiger', 'Bear', 'Elephant', 'Wolf', 'Fox', 'Giraffe', 'Zebra', 'Kangaroo', 'Panda', 'Koala', 'Dolphin', 'Eagle', 'Shark', 'Whale', 'Cheetah', 'Leopard', 'Hawk', 'Falcon', 'Owl', 'Penguin', 'Flamingo', 'Parrot', 'Turtle', 'Frog', 'Snake', 'Lizard', 'Crocodile', 'Alligator', 'Hippo', 'Rhino'];

function generateRandomName() {
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    
    return `${randomFirstName} ${randomLastName}`;
}

function generateRandomEmail() {
    const randomName = generateRandomName().replace(/\s+/g, '').toLowerCase();
    const randomDomain = domains[Math.floor(Math.random() * domains.length)];
    return `${randomName}@${randomDomain}`;
}

function generateRandomAnimal() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    return `${randomColor} ${randomAnimal}`;
}

async function fetchWords(type) {
    const url = `https://api.datamuse.com/words?rel_jjb=${type}`; // Fetch related words
    try {
        const response = await axios.get(url);
        return response.data.map(wordObj => wordObj.word);
    } catch (error) {
        console.error(`Error fetching ${type} words:`, error);
        return []; // Fallback to an empty array
    }
}

async function generateRandomCombination() {
    const adjectives = await fetchWords('color'); // Fetch adjectives (e.g., colors)
    const nouns = await fetchWords('animal'); // Fetch nouns (e.g., animals)

    if (adjectives.length === 0 || nouns.length === 0) {
        return 'Error generating combination';
    }

    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

    return `${randomAdjective} ${randomNoun}`;
}

module.exports = {
    generateRandomName,
    generateRandomEmail,
    generateRandomCombination,
    generateRandomAnimal
};