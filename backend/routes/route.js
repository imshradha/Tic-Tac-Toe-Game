import express from "express";
import { Login, Register } from '../controllers/usercontroller.js';
//import { Authentication } from "../middlewares/auth.js";

const router = express.Router();

//User Apis
router.post('/register', Register)
router.post('/login', Login)

export default router;
