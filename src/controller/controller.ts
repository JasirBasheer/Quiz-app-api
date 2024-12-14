
import { Request, Response } from "express";
import Question from "../models/model"

const getCategories = async (req: Request, res: Response) => {
    try {
        const categories = await Question.distinct('category')
        res.status(200).json({ categories })
    } catch (error) {
        console.log(error)
    }
}


const addQuestion = async (req: Request, res: Response) => {
    try {
        const newQuestion = new Question(req.body)
        const question = await newQuestion.save()
        if (question) res.status(200).json({ message: "Question created successfully" })
        else res.status(400).json({ message: "Something went wrong" })
    } catch (error) {
        console.log(error)
    }
}

const getQuestions = async (req: Request, res: Response) => {
    try {
        const { category } = req.params
        const questions = await Question.find({ category: category })
        res.status(200).json({ questions })

    } catch (error) {
        console.log(error)
    }
}

export default {
    getCategories,
    addQuestion,
    getQuestions,
}
