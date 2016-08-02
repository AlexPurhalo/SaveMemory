// Node modules import
import express from 'express';
import bodyParser from 'body-parser';

// Server configuration import
import { serverPort } from '../etc/config.json';

// Application module import
import * as db from './utils/DataBaseUtils';

// Connection configuration
db.setUpConnection();

// HTTP requests
const app = express();

app.use(bodyParser.json());

app.get('/notes', (req, res) => {
    db.listNotes().then(data => res.send(data));
});

app.post('/notes', (req, res) => {
    db.createNote(req.body).then(data => res.send(data));
});

app.delete('/notes/:id', (req, res) => {
    db.deleteNote(req.params.id).then(data => res.send(data));
});

// Server Using
const server = app.listen(serverPort, () => {
   console.log(`Server is working now ${serverPort}`);
});
