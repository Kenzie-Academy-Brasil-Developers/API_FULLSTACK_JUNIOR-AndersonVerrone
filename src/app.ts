import 'express-async-errors';
import express from 'express';
import { loginRoutes, userRoutes } from './routers';
import { handleError } from './errors';

const app = express();

app.use( express.json() );
app.use( "/login", loginRoutes );
app.use( "/users", userRoutes );
app.use( handleError );

export default app;