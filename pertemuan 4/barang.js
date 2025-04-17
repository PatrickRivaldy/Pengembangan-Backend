const express = require('express');
const router = express.Router();

router.get('/', (req,res) =>{
    res.send('Barang')
});

router.post('/', (req,res) =>{
    res.send('Barang')
});

router.put('/', (req,res) =>{
    res.send('Barang')
});

router.delete('/', (req,res) =>{
    res.send('Barang')
});


module.exports = router;

