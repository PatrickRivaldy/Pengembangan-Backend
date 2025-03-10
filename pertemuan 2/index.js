const express = require ('express');
const app = express();
const port = 3000;
const user = require('./user');
const book = require('./book');
const peminjaman = require('./peminjaman');

app.use('/user',user);
app.use('/book',book);
app.use('/peminjaman',peminjaman);

app.get('/', (req, res) =>{
    res.send('mengambil data')
})

app.post('/', (req, res) =>{
    res.send('kirim data')
})

app.put('/', (req, res) =>{
    res.send('kirim data')
})

app.patch('/', (req, res) =>{
    res.send('kirim data')
})

app.delete('/', (req, res) =>{
    res.send('hapus data')
})


app.listen(port, () =>{
    console.log('Apikasi sedang berjalan ${port}');
});