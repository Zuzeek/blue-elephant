const express = require('express');
const bodyParser = require('body-parser');
const generatorRoutes = require('./routes/generator');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: 'http://localhost:3000',
}));

app.use(bodyParser.json());
app.use('/api', generatorRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});