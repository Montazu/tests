import express from "express"
import { questionsController } from "../controllers"

const router = express.Router()

router.get("/api/questions", questionsController.get)
router.post("/api/questions", questionsController.add)

export default router
