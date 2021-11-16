import express from 'express';
import basicAuthenticationMiddleware from './middlewares/basic-authentication.middleware';
import errorHandler from './middlewares/error-handler.middleware';
import authorizationRoute from './routes/authorization.route';
import usersRoute from './routes/users.route';

const app = express();

// application middlewares settings
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes settings
app.use(usersRoute);
app.use(authorizationRoute);

// Errors handlers settings
app.use(errorHandler);

app.listen(3000,()=> {
    console.log('Server running at http://localhost:3000');
})