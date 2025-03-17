const express = require('express');
const router = express.Router();

router.get('/', (req,res) =>{
    res.send('mapel')
});

router.post('/', (req,res) =>{
    res.send('mapel')
});

router.put('/', (req,res) =>{
    res.send('mapel')
});

router.delete('/', (req,res) =>{
    res.send('mapel')
});

module.exports = router;
