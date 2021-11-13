import express, { Request, Response, NextFunction } from 'express';

const app = express();

app.use(express.json());

app.listen(3000,()=> {
    console.log('Server running at http://localhost:3000');
})