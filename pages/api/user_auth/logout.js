import { Users } from "../../../models/users.model";
import dbConnect from "../../../utils/db";
import jwt from 'jsonwebtoken';
import cookie from 'cookie'


const logout = async (req, res) => {
    const { cookies: { auth_cookie } } = req;
    const verification = jwt.verify(auth_cookie, process.env.JWT_SECRET);
    try {
        await dbConnect();
        if (req.method === 'POST') {
            await Users.updateOne({ _id: verification.userId }, { $push: { blackList: auth_cookie } });
            res.setHeader('Set-Cookie', cookie.serialize('auth_cookie', '', {
                httpOnly: true,
                secure: process.env.NODE_ENV !== 'development',
                sameSite: 'strict',
                maxAge: -1,
                path: '/'
            }))
            res.status(200).json({
                status: 1,
                message: 'logged out!'
            })
        }
    } catch (error) {
        res.json(error.message)
        console.log(error);
    }
}

export default logout;