const express = require('express');
const router = express.Router();

router.get('/', (req,res) =>{
    res.send('nilai')
});

router.post('/', (req,res) =>{
    res.send('nilai')
});

router.put('/', (req,res) =>{
    res.send('nilai')
});

router.delete('/', (req,res) =>{
    res.send('nilai')
});

module.exports = router;