const express = require ('express');
const app = express();
const port = 3000;
const user = require('./user');
const barang = require('./barang');

app.use('/user',user);
app.use('/barang',barang);

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