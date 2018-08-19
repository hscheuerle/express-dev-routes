const express = require('express');
const app = express();

const apiRouter = express.Router();
const methodsRouter = express.Router();

methodsRouter.get('/winner', function apiResourceWinner() { res.end() });

apiRouter.use('/methods', methodsRouter);
apiRouter.get('/resource', function apiResource() { res.end() });
apiRouter.put('/resource', function apiResource() { res.end() });
apiRouter.post('/resource', function apiResource() { res.end() });
apiRouter.delete('/resource', function apiResource() { res.end() });

app.get('/', (req, res) => { res.end() });
app.put('/', (req, res) => { res.end() });
app.post('/', (req, res) => { res.end() });
app.delete('/', (req, res) => { res.end() });

app.get('/users', (req, res) => { res.end() });
app.put('/users', (req, res) => { res.end() });
app.post('/users', (req, res) => { res.end() });
app.delete('/users', (req, res) => { res.end() });

app.get('/users', function users(req, res) { res.end() });
app.put('/users', function users(req, res) { res.end() });
app.post('/users', function users(req, res) { res.end() });
app.delete('/users', function users(req, res) { res.end() });

app.use('/api', apiRouter);

const expected = [
    { method: '', path: '', name: '' },
];

module.exports = { app, expected }