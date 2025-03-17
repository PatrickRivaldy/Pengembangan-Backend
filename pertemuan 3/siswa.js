const express = require('express');
const router = express.Router();

router.get('/', (req,res) =>{
    res.send('siswa')
});

router.post('/', (req,res) =>{
    res.send('siswa')
});

router.put('/', (req,res) =>{
    res.send('siswa')
});

router.delete('/', (req,res) =>{
    res.send('siswa')
});

module.exports = router;
