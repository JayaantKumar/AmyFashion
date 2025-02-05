import e from "express";
import { loginUser,registerUser,adminLogin } from "../controllers/userController.js";

const userRouter = e.Router();

userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)
userRouter.post('/admin',adminLogin)

export default userRouter;