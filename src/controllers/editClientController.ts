import { Request, Response } from "express";
import { editClientService } from "../service/editClientService";

export class editClientController{
    async edit(req:Request,res:Response):Promise<void>{
       const {clientName, clientPass,newClientName,newClientPass} = req.body;
       const serviceClient = new editClientService;
       const service = serviceClient.edit(clientName,clientPass, newClientName, newClientPass)

    }
}