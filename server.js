const express = require('express');
const bodyParser = require('body-parser');
const mahsiswaController = require('./controllers/mahasiswaController');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Endpoint untuk mahasiswa 
app.use('mahasiswa', mahsiswaController);

// Jalanakan server 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
