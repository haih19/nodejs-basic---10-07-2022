import express from 'express';



const app = express();
const port = 8080


app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('/about', (req, res) => {
    res.send('This is about route')
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost: ${port}`);
})