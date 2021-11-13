import express from 'express';
import usersRoute from './routes/users.routes';

const app = express();

app.use(express.json());
app.use(usersRoute);

app.listen(3000,()=> {
    console.log('Server running at http://localhost:3000');
})