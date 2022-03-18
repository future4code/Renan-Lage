import express from "express"
import { createTask } from "../controller/task/createTask"
import { getTaskById } from "../controller/task/getTaskById"

export const userRouter = express.Router()


userRouter.put('/task', createTask)
userRouter.get('/task/:id', getTaskById)