import express from 'express';
import routes from './routes/route.js';
import dotenv from 'dotenv';
import connection from './database/db.js';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());

app.use('/', routes);

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

connection(username, password);

const port = 8000;

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})