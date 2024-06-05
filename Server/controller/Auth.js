import Users from "../model/mode.js";
import argon2 from "argon2";


export const Login = async (req, res) => {
    const { email , password } = req.body

    if (!email || !password) {
        return res
           .status(400)
           .json({ msg: "Email and password is required." });
    }


    try {

        const user = await Users.findOne({
            where: { email: req.body.email },
        });

        

        if (!user) return res.status(404).json({ msg: "account not found pak." });
        
        
        // Hashing password dan membandingkan dengan password di database
        const match = await argon2.verify(user.password, req.body.password);
        if (!match) {
            return res.status(401).json({ msg: "Invalid email or password pak." });
        }

        // Menyimpan uuid pengguna ke dalam session guys
        req.session.userId = user.uuid;

        // Mengambil informasi pengguna untuk respons
        const { uuid, username, email, role } = user;

        // Mengirim respons dengan informasi pengguna
        res.status(200).json({ uuid, username, email, role , msg : "login berhasil pak !" });

    } catch (error) {   
        // console.log(error);
        res.status(500).json({ msg: "Server error occurred." });
    }
};
export const UserIdentity = async (req, res) => {
    if (!req.session.uuid) {
        return res.status(401).json({ msg: "please login your account bro!" });
    }

    const user = await Users.findOne({
        attributes: ["uuid", "username", "email", "role"],
        where: { uuid: req.session.uuid },
    });

    if (!user) return res.status(404).json({ msg: "account not found !" });
    res.status(200).json(user);
};


export const Logout = (req , res) => {
    req.session.destroy((err) => {
        if (err) return res.status(400).json({msg : "your account failed to log out"});
        res.status(200).json({msg : "your Logout succedfully "})
    })
}