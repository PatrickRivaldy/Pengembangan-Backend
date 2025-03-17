const express = require('express');
const router = express.Router();

router.get('/', (req,res) =>{
    res.send('presensi')
});

router.post('/', (req,res) =>{
    res.send('presensi')
});

router.put('/', (req,res) =>{
    res.send('presensi')
});

router.delete('/', (req,res) =>{
    res.send('presensi')
});

module.exports = router;
