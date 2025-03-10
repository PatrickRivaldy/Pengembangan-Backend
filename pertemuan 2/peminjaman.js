const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.send('peminjaman');
});

router.get('/:id', (req, res) =>{
    res.send('peminjaman' + req.params.id);
});

module.exports = router;