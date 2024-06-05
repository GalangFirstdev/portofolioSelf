// import express from "express";
import argon2 from "argon2";
import Users from "../model/mode.js";
import { Op } from "sequelize";

export const getUser = async (req , res ) => {
try {
    const response = await Users.findAll({
        attributes : ["uuid" , "username" , "email" , "role"], 
    })
    res.status(200).json(response)
} catch (error) {
    res.status(500).json({ msg : error.message})
}
};

export const getUserId = async (req, res) => {
    try {
        const response = await Users.findOne({
            attributes: ["uuid", "username", "email", "role"],
            where: {
                uuid: req.params.id,
            },
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};


export const SessionId = async ( req , res ) => {
    
    try {
        // Check if the session contains a userId
        if (!req.session.userId) {
          return res.status(401).json({ msg: "Please log in to your account, bro!" });
        }
    
        // Find the user in the database using the session userId
        const user = await Users.findOne({
          where: {
            uuid: req.session.userId,
          }
        });
    
        // If user not found, return an unauthorized response
        if (!user) {
          return res.status(401).json({ msg: "User not found. Please log in again." });
        }
    
        // Respond with the user data if session is valid
        res.json({ user });
      } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal server error" });
      }
     


    // try {
    //     // Melakukan pengecekan apakah pengguna sudah masuk atau belum
    //     if (!req.session.user_id) {
    //       return res.status(401).json({ message: 'Mohon login ke akun Anda!' , valid : false });
    //     }
    
    //     // Mencari pengguna berdasarkan ID yang disimpan di session
    //     const user = await Users.findOne({
    //       where: {
    //         sid : req.session.user_id
    //       }
    //     });
    
    //     // Mengembalikan data pengguna jika ditemukan
    //     if (user) {
    //       res.status(200).json({msg :  user  , valid : true});
    //     } else {
    //       res.status(404).json({ message: 'User tidak ditemukan' });
    //     }
    //   } catch (error) {
    //     console.error('Error fetching user data:', error);
    //     res.status(500).json({ message: 'Terjadi kesalahan saat memuat data pengguna' });
    //   }

}


export const CreateUser = async (req, res) => {
    const { username, email, password, confirmpassword, role } = req.body;

    if (!username || !email || !password || !confirmpassword , !role) {
        return res.status(400).json({msg : "jangan kosong pak"})
    }

    if (password !== confirmpassword) {
        return res
            .status(400)
            .json({ msg: "password is not the same confirm password" });
    }

    const hashPassword = await argon2.hash(password);

    try {

        const closeDataUser = await Users.findOne({
            where : {
                // method [Op.or] yang di gunakan untuk memvalidasi 'apakah pengguna  memiliki data yang sudh terdaftar sebelum nya '
                [Op.or] : [
                    { username : username },
                    { email : email }
                ]
            }
        });

        if (closeDataUser) {
            return res.status(400).json({msg : "username and email are already registered"})
        }

        
           const newUser =  await Users.create({
            username: username,
            email: email,
            password: hashPassword,
            role: role,
        });

        req.session.userId = newUser.uuid
        console.log(newUser.uuid);
        // req.session.save((err) => {
        //     if (err) {
        //       return res.status(500).send('Terjadi kesalahan saat menyimpan sesi');
        //     }
        // });
        return res.status(200).json({ msg: "register succesfuly"  , Login : true});
        
    } catch (error) {
        res.status(400).json({ msg: error.message });
        console.log(error);
    }
};

export const UpdatePassword = async (req , res ) => {
     const user = await Users.findOne({
        where : {
            uuid : req.params.id
        }
     })
     if (!user) return res.status(404).json({msg : "user not found"})

     const { username, email, password, confirmpassword, role } = req.body;

     let hashPassword ;

     if (password === "" || password === null) {
        hashPassword = user.password
     } else {
        // jika user ingin update data maka kita hash lagi disini 
        hashPassword = await argon2.hash(password)
     }
     if (password !== confirmpassword) {
        return res
            .status(400)
            .json({ msg: "password is not the same confirm password" });
    }

    // jika keseluruhan data sesuai maka update ke database 
    try {        
            const newUser  = await Users.update({
            username: username,
            email: email,
            password: hashPassword,
            role: role,
        } , {
            // di update berdasarkan ID 
            where : {
                id : user.id
            }
        });

        req.session.uuid = newUser.uuid;
        
        res.status(200).json({ msg: "updated succesfuly" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
        console.log(error);
    }


};

export const DeleteUser = async ( req , res ) => {
    

        const users = await Users.findOne({
            where : {
                uuid : req.params.id
            }
        })
        if (!users) res.status(404).json({ msg : "user is not found"})
        try {
            await Users.destroy({
                where : {
                    id : users.id
                }
            
            }) 
            res.status(201).json({msg : 'user is delete'})
        } catch (error) {
            console.log(error);
            res.status(500).json({msg : 'user failed to delete'})
        }
};
