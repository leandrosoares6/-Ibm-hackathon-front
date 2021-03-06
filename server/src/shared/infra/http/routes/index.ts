import { Router } from 'express';

import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import profileRouter from '@modules/users/infra/http/routes/profile.routes';
import passwordRouter from '@modules/users/infra/http/routes/password.routes';

const routes = Router();

routes.use('/sessions', sessionsRouter);
routes.use('/users', usersRouter);
routes.use('/profile', profileRouter);
routes.use('/password', passwordRouter);

export default routes;
