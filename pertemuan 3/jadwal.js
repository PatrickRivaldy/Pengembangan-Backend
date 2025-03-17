const express = require('express');
const router = express.Router();

router.get('/', (req,res) =>{
    res.send('jadwal')
});

router.post('/', (req,res) =>{
    res.send('jadwal')
});

router.put('/', (req,res) =>{
    res.send('jadwal')
});

router.delete('/', (req,res) =>{
    res.send('jadwal')
});

module.exports = router;
