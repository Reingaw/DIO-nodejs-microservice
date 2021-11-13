import express from 'express';
import usersRoute from './routes/users.routes';

const app = express();

// application middlewares settings
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes settings
app.use(usersRoute);

app.listen(3000,()=> {
    console.log('Server running at http://localhost:3000');
})