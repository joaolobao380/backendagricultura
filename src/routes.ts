import {Router} from 'express';
import { AuthenticateUserController } from './modules/account/authenticateUser/authenticateUserController';
import { FindLinkedUserController } from './modules/linkedUser/findLinkedUserUseCases/findLinkedUserController';
import { CreateLinkedUserController } from './modules/linkedUser/useCases/createLinkedUser/createLinkedUserController';
import { FindQuestionThroughtProtocolController } from './modules/question/findQuestionThroughtProtocolUseCases/findQuestionThroughtProtocolController';
import { FindQuestionController } from './modules/question/findQuestionUseCases/findQuestionController';
import { CreateQuestionController } from './modules/question/useCases/createQuestion/createQuestionController';
import { CreateUserController } from './modules/users/useCases/createUser/createUserController';

const routes = Router();

const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()
const createLinkedUserController = new CreateLinkedUserController()
const createQuestionController = new CreateQuestionController()
const findLinkedUserController = new FindLinkedUserController()
const findQuestionController = new FindQuestionController()
const findQuestionThroughtProtocolController = new FindQuestionThroughtProtocolController()

routes.post("/api/user/", createUserController.handle)
routes.post("/api/auth/", authenticateUserController.handle)
routes.post("/api/linkeduser/", createLinkedUserController.handle)
routes.post("/api/question/", createQuestionController.handle)
routes.get("/api/linkeduser/", findLinkedUserController.handle);
routes.get("/api/question/", findQuestionController.handle);
routes.get("/api/question/:protocol", findQuestionThroughtProtocolController.handle);

export {routes};