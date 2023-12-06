const express = require('express');
const router = express.Router();
const db = require('../models/db');
const { error } = require("console");

const tableName = "mahasiswa";

// GET all mahasiswa
router.get('/', (req, res) => {
  db.query('SELECT * FROM mahasiswa', (error, results) => {
    if (error) {
      console.error('Error fetching mahasiswa:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

// GET specific mahasiswa by nim
router.get('/:nim', (req, res) => {
  const mahasiswaNim = req.params.nim;
  db.query('SELECT * FROM mahasiswa WHERE nim = ?', [mahasiswaNim], (error, results) => {
    if (error) {
      console.error('Error fetching mahasiswa:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    } else if (results.length === 0) {
      res.status(404).json({ message: 'Mahasiswa not found' });
    } else {
      res.json(results[0]);
    }
  });
});

// POST create new mahasiswa
router.post('/', (req, res) => {
  const mahasiswaNIM = req.params.nim;
  const { nim, nama, gender, prodi, alamat } = req.body;
  db.query(`UPDATE ${tableName} SET nama = ?, gender = ?, prodi = ?, alamat = ? WHERE nim = ?`, [nama, gender, prodi, alamat, mahasiswaNIM], (error) => {
   
      if (error) {
        console.error('Error creating mahasiswa:', error);
        res.status(500).json({ message: 'Internal Server Error' });
      } else {
        res.json({ message: 'Mahasiswa created successfully' });
      }
    });
  });

// PUT update mahasiswa by nim
router.put('/:nim', (req, res) => {
  const mahasiswaNim = req.params.nim;
  const { nama, gender, prodi, alamat } = req.body;
  db.query(`UPDATE ${tableName} SET nama = ?, gender = ?, prodi = ?, alamat = ? WHERE nim = ?`, [nama, gender, prodi, alamat, mahasiswaNIM], (error) => {
      if (error) {
        console.error('Error updating mahasiswa:', error);
        res.status(500).json({ message: 'Internal Server Error' });
      } else if (result.length === 0) {
        res.json({ message: 'Updating mahasiswa successfully' });
      } else {
        res.json(result[0]);
      }
    });
  });

// DELETE specific mahasiswa by nim
router.put("/:nim", (req, res) => {
  const mahasiswaNim = req.params.nim;
  const { nama, gender, prodi, alamat } = req.body;
  db.query('DELETE FROM mahasiswa WHERE nim = ?', [mahasiswaNim], (error, results) => {
    if (error) {
      console.error("Error updating mahasiswa : ", error);
      res.status(500).json({ message: 'Internal Server Error' });
    } else {
      res.json({ message: 'Mahasiswa deleted successfully' });
    }
  });
});

router.post("/:nim", (req, res) => {
  const mahasiswaNIM = req.params.nim;
  const { nama, gender, prodi, alamat } = req.body;
  const data = {
    nama: nama,
    nim: mahasiswaNIM,
    gender: gender,
    prodi: prodi,
    alamat: alamat,
  };
   db.query(`INSERT INTO ${tableName} SET nama = ?, gender = ?, prodi = ?, alamat = ? WHERE nim = ?`, [nama, gender, prodi, alamat, mahasiswaNIM], (error) => {
    if (error) {
      console.error("Error updating mahasiswa : ", error);
      res.status(500).json({ massage: "Internal Server Error" });
    } else {
      res.json({ massage: "Updatin mahasiswa successfullys" });
    }
  });
});

module.exports = router;
