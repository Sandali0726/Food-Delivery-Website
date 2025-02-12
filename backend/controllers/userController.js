import userModel from '../models/userModel.js';
import jwy from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'

// login user

const loginUser = async (req,res) => {

}
// register user
const registerUser = async (req,res) => {
    const {name,password,email} = req.body;
    try {
        // checking is user already exists
        const exists = await userModel.findone({email})
        if (exists) {
            return res.json({success:false,message:"User already exists"})
        }

        // validating email format and strong password
        if (!validator.isEmail(email)) {
            return res.json({success:false,message:"User already exists"})
        }
    } catch (error) {
        
    }
}

export{loginUser,registerUser}