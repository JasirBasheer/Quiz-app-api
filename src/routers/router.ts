import {Router} from "express"
import controller from "../controller/controller"
const router = Router()

router.post("/add-question",controller.addQuestion)
router.get("/get-categories",controller.getCategories)
router.get("/get-questions/:category",controller.getQuestions)


export default router