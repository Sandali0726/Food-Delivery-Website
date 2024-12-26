import express from 'express';  
import { addFOOD } from '../controllers/foodControllers.js';
import multer from 'multer'

const foodRouter = express.Router();

foodRouter.post("/add",addFOOD)

export default foodRouter;