
import express from 'express';
const app = express();
import bodyParser from 'body-parser';
const PORT = 3000;

import usersRoutes from './routes/users.js';

app.use(bodyParser.json())

app.use('/users', usersRoutes);

app.get('/', (req, res) => {
    res.send('Hello, This is REST API using node and express!')
})

app.all('*', (req, res) => {
    res.send('You are trying find something else! Please type correct URL.')
})

app.listen(PORT, () => {
    console.log(`Server started at port: ${PORT}`);
})