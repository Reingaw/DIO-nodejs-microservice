import express from 'express';
import errorHandler from './middlewares/error-handler.middleware';
import usersRoute from './routes/users.routes';

const app = express();

// application middlewares settings
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes settings
app.use(usersRoute);

// Errors handlers settings
app.use(errorHandler);

app.listen(3000,()=> {
    console.log('Server running at http://localhost:3000');
})