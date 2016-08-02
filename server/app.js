import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send("if you see it in browser that means that server is working");
});

const server = app.listen(8080, () => {
   console.log('Server is working now');
});