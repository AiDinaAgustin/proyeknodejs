const express = require('express');
const router = express.Router();
const db = require('../models/db');

// GET /matakuliah
router.get('/', (req, res) => {
    db.query('SELECT * FROM matakuliah', (error, results) => {
        if (error) {
            console.error('Error fetching matakuliah:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        } else {
            res.json(results);
        }
    });
});

// GET /matakuliah/:kode
router.get('/:kode', (req, res) => {
    const kodeMatakuliah = req.params.kode;
    db.query('SELECT * FROM matakuliah WHERE kode = ?', [kodeMatakuliah], (error, results) => {
        if (error) {
            console.error('Error fetching matakuliah:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        } else if (results.length === 0) {
            res.status(404).json({ message: 'Matakuliah not found' });
        } else {
            res.json(results[0]);
        }
    });
});

// POST /matakuliah
router.post('/', (req, res) => {
    const { kode, nama, sks } = req.body;
    db.query('INSERT INTO matakuliah (kode, nama, sks) VALUES (?, ?, ?)', [kode, nama, sks], (error) => {
        if (error) {
            console.error('Error creating matakuliah:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        } else {
            res.json({ message: 'Matakuliah created successfully' });
        }
    });
});

// PUT /matakuliah/:kode
router.put('/:kode', (req, res) => {
    const kodeMatakuliah = req.params.kode;
    const { nama, sks } = req.body;
    db.query('UPDATE matakuliah SET nama = ?, sks = ? WHERE kode = ?', [nama, sks, kodeMatakuliah], (error) => {
        if (error) {
            console.error('Error updating matakuliah:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        } else {
            res.json({ message: 'Matakuliah updated successfully' });
        }
    });
});

// DELETE /matakuliah/:kode
router.delete('/:kode', (req, res) => {
    const kodeMatakuliah = req.params.kode;
    db.query('DELETE FROM matakuliah WHERE kode = ?', [kodeMatakuliah], (error) => {
        if (error) {
            console.error('Error deleting matakuliah:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        } else {
            res.json({ message: 'Matakuliah deleted successfully' });
        }
    });
});

module.exports = router;
