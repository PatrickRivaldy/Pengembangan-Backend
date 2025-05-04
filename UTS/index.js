const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const userRouter = require('./route/routes'); // fix path dan nama

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/Toko', userRouter);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});