import {Router} from 'express';
import { AuthenticateUserController } from './modules/account/authenticateUser/authenticateUserController';
import { CreateLinkedUserController } from './modules/linkedUser/useCases/createLinkedUser/createLinkedUserController';
import { CreateQuestionController } from './modules/question/useCases/createQuestion/createQuestionController';
import { CreateUserController } from './modules/users/useCases/createUser/createUserController';

const routes = Router();

const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()
const createLinkedUserController = new CreateLinkedUserController()
const createQuestionController = new CreateQuestionController()

routes.post("/api/user/", createUserController.handle)
routes.post("/api/auth/", authenticateUserController.handle)
routes.post("/api/linkeduser/", createLinkedUserController.handle)
routes.post("/api/question/", createQuestionController.handle)

export {routes};