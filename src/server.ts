import { registerClientController } from "./controllers/registerClientController";
import express from "express"

const app = express()
const port = 3000;

const registerClientControllerRoute = new registerClientController;

app.get('/', (req:any, res:any) =>{
    res.status(200).json('sucess')
})

app.post('/user',registerClientControllerRoute.index)

// api for datas user
// https://randomuser.me/api/
app.listen(port,() =>{
    console.log('server online na port 3000')
})