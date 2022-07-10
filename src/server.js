import express from 'express';
import configViewEngine from './config/viewEngine.js';
import { } from 'dotenv/config'

const app = express();
const port = process.env.PORT || 8080;

configViewEngine(app);


app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('/about', (req, res) => {
    res.send('This is about route')
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost: ${port}`);
})