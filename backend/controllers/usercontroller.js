import jwt from 'jsonwebtoken';
import userModel from '../models/usermodel.js';

export const Register = async (req, res) => {
    try {
        const requestBody = req.body;
        const newUser = await userModel.create(requestBody);
        return res.status(201).send({ status: true, message: "User registered successfully..", data: newUser })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}

export const Login = async (req, res) => {
    try {
        const requestBody = req.body;
        const { email, password } = requestBody;
        
        const userLogin = await userModel.findOne({ email: email, password: password });
        if (!userLogin) {
            return res.status(404).send({ status: false, message: "User not found" })
        }
        else {
            const token = jwt.sign({
                userId: userLogin._id.toString(),
            }, "Tic-Tac-Toe")

            return res.status(201).send({ status: true, message: "Login Successfull", token: token })
        }

    } catch(error) {
        res.status(500).send({ status: false, message: error.message })
    }
}




