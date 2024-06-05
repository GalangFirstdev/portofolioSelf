import express from 'express'
import {
    getUser , 
    getUserId , 
    CreateUser , 
    UpdatePassword , 
    DeleteUser,
    SessionId
    
    } from '../controller/Users.js'
    

    import { verifyUser } from "../middleware/AuthUsers.js"

const router = express.Router()

router.get('/users' ,    getUser )
router.get('/users/:id' ,   getUserId)
router.post('/users'   ,  CreateUser)
router.patch('/users/:id' ,   UpdatePassword)
router.delete('/users/:id' ,   DeleteUser)
router.get('/auth' ,   SessionId)


export default router;

