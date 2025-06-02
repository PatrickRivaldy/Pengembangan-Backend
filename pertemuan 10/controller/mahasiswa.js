const express = require('express');
const router = express.Router();
const Siswa = require('../model/siswa'); // Pastikan nama model diawali huruf kapital

// GET semua siswa
router.get('/', async (req, res) => {
    try {
        const siswa = await Siswa.findAll();
        res.json(siswa);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET siswa by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const siswa = await Siswa.findByPk(id);
        if (siswa) {
            res.json(siswa);
        } else {
            res.status(404).json({ message: 'Siswa not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// POST tambah siswa
router.post('/', async (req, res) => {
    const { nama, nisn, alamat } = req.body;
    try {
        const newsiswa = await Siswa.create({ nama, nisn, alamat });
        res.status(201).json(newsiswa);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// PUT update siswa
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { nama, nisn, alamat } = req.body;
    try {
        const siswa = await Siswa.findByPk(id);
        if (siswa) {
            siswa.nama = nama;
            siswa.nisn = nisn;
            siswa.alamat = alamat;
            await siswa.save(); // Perbaikan di sini
            res.json(siswa);
        } else {
            res.status(404).json({ message: "Siswa not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// DELETE siswa
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await Siswa.destroy({ where: { id } });
        if (deleted) {
            res.json({ message: 'Siswa deleted' });
        } else {
            res.status(404).json({ message: 'Siswa not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
