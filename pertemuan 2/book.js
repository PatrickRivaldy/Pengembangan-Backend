const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.send('book');
});

router.get('/:id', (req, res) =>{
    res.send('book' + req.params.id);
});

module.exports = router;