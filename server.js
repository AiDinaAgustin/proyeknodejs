const express = require('express');
const bodyParser = require('body-parser');
const mahasiswaController = require('./controllers/mahasiswaController');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());


// endpoint mahasiswa
app.use('/mahasiswa', mahasiswaController);

// jalankan server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});