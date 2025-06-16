import express, {Application} from 'express'
import { errorHandler } from '../middlewares/errorHandler.middleware';
import { loggerMiddleware } from '../middlewares/logger.middleware';

const app : Application = express()

app.use(express.json());
app.use(loggerMiddleware)

app.use(errorHandler)

export default app