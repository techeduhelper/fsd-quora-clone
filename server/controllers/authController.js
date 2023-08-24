import userModel from "../models/userModel.js"
import { comparePassword, hassPassword } from './../helpers/authHelper.js';
import JWT from 'jsonwebtoken'


//Register Controller || POST Request
export const registerController = async (req, res) => {
    try {
        const { name, email, mobno, password } = req.body
        if (!name) {
            return res.send({ message: "Name is Required" })
        }
        if (!email) {
            return res.send({ message: "Email is Required" })
        }
        if (!mobno) {
            return res.send({ message: "Mobile no is Required" })
        }
        if (!password) {
            return res.send({ message: "Password is Required" })
        }
        const existingUser = await userModel.findOne({ email })

        if (existingUser) {
            return res.status(200).send({
                success: false,
                message: "Already Register please login"
            })
        }
        const hassedPassword = await hassPassword(password)

        const user = await userModel({ name, email, mobno, password: hassedPassword }).save()

        res.status(200).send({
            success: true,
            message: "Register Successfully",
            user,
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in register",
            error
        })
    }
}


export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(404).send({ message: "incorrect email & password" })
        }
        const user = await userModel.findOne({ email })
        if (!user) {
            throw new Error("Email not found")
        }

        const matchPassword = await comparePassword(password, user.password)
        if (!matchPassword) {
            return res.status(401).send({
                success: false,
                message: "Incorrect Password"
            })
        }

        const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })

        res.status(201).send({
            success: true,
            message: "Login Successfully",
            user: {
                name: user.name,
                email: user.email,
                mobno: user.mobno
            },
            token
        })


    } catch (error) {
        console.log(error)
        res.status(404).send({
            success: false,
            message: "Error in login",
            error
        })
    }
}




export const protectedRoute = (req, res) => {
    res.send("protected route")
}
