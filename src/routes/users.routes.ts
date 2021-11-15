import { NextFunction, Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import userRepository from '../repositories/user.repository';

const usersRoute = Router();

usersRoute.get('/users', async (req: Request, res: Response, next: NextFunction)=> {
    const users = await userRepository.findAllUsers();
    res.status(StatusCodes.OK).send({users});
});

usersRoute.get('/users/:uuid', async (req: Request<{ uuid: string }>, res: Response, next: NextFunction)=> {
    const { uuid } = req.params;
    const user = await userRepository.findUserById(uuid);
    res.status(StatusCodes.OK).send(user);
});

usersRoute.post('/users', async (req: Request, res: Response, next: NextFunction)=> {
    const newUser = req.body;

    const uuid = await userRepository.createUser(newUser)

    res.status(StatusCodes.CREATED).send(uuid);
});

usersRoute.put('/users/:uuid', async (req: Request<{ uuid: string }>, res: Response, next: NextFunction)=> {
    const { uuid } = req.params;
    const modifieUser = req.body;

    modifieUser.uuid = uuid;

    await userRepository.updateUser(modifieUser)

    res.status(StatusCodes.OK).send();
});

usersRoute.delete('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction)=> {
    const { uuid } = req.params;
    userRepository.removeUser(uuid);

    res.sendStatus(StatusCodes.OK);
});

export default usersRoute;