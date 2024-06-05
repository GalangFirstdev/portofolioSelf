import express from 'express'
import { Login , UserIdentity , Logout  } from '../controller/Auth.js'

const routers = express.Router();


routers.get('/UserIdentity' , UserIdentity)
routers.post('/LoginUser' , Login)
routers.delete('/Logout' , Logout)


export default routers;
