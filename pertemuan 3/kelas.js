const express = require('express');
const router = express.Router();

router.get('/', (req,res) =>{
    res.send('kelas')
});

router.post('/', (req,res) =>{
    res.send('kelas')
});

router.put('/', (req,res) =>{
    res.send('kelas')
});

router.delete('/', (req,res) =>{
    res.send('kelas')
});

module.exports = router;
