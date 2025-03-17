const express = require ('express');
const app = express();
const port = 3000;
const user = require('./user');
const mapel = require('./mapel');
const siswa = require('./siswa');
const guru = require('./guru');
const kelas = require('./kelas');
const jadwal = require('./jadwal');
const nilai = require('./nilai');
const presensi = require('./presensi');

app.use('/user',user);
app.use('/mapel',mapel);
app.use('/siswa',siswa);
app.use('/guru', guru);
app.use('/kelas',kelas);
app.use('/jadwal',jadwal);
app.use('/nilai',nilai);
app.use('/presensi',presensi);

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