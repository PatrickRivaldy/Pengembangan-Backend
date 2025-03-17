const express = require('express');
const router = express.Router();

router.get('/', (req,res) =>{
    res.send('guru')
});

router.post('/', (req,res) =>{
    res.send('guru')
});

router.put('/', (req,res) =>{
    res.send('guru')
});

router.delete('/', (req,res) =>{
    res.send('guru')
});

module.exports = router;
