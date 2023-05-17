import { registerClienteService } from "../service/registerClienteService"
import {Request, Response} from 'express'

export class registerClientController{
  async index(req:Request, res:Response) {
    const {clientName,clientPass} = req.query
    const serviceClient = new registerClienteService;
    const service = await serviceClient.create(clientName as string,clientPass)
    res.send(service)
  }
}