import dotenv from "dotenv";
dotenv.config();
import express from "express";
import session from "express-session";
// import models from "./model/mode.js";
import db from "./config/database.js";
import sessionstore from "connect-session-sequelize";
import AuthRoutes from "./routes/AuthRoutes.js";
import VerifyUser from "./routes/UserVerify.js";
import cors from "cors"
import bodyParser from "body-parser";

const app = express();

// active sync for generate field databases
// (async () => {
//     await models.sync();
// })();




// app.use(bodyParser.json())

const hours = 120000 

const SessionStores = sessionstore(session.Store);

const store = new SessionStores({ db: db });


app.use(
    session({
        secret: process.env.SESS_SECREET,
        resave: false,
        saveUninitialized: false,
        store: store,
        cookie: {
            
            secure: false, // pastikan secure di set ke true jika menggunakan HTTPS
            httpOnly: true,
            sameSite: 'lax',
            maxAge : new Date(Date.now() +  hours ) 
        },
    })
);


app.use(cors( { origin : "http://localhost:5173" , credentials : true }));

app.use(bodyParser.urlencoded({ extended : true}))
app.use(express.json());
app.use(AuthRoutes);
app.use(VerifyUser);

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Ganti dengan URL frontend Anda
//     res.setHeader('Access-Control-Allow-Credentials', 'true');
//     next();
//   });




// store.sync();

app.listen(process.env.PORT, (req, res) => {
    console.log(`port running in ${process.env.PORT}`);
});
