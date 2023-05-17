import { randomUUID } from 'crypto';

export class registerClienteService{
    async create(clientName:string,clientPass:any):Promise<string>{
        const newClient = {
            clientPass,
            clientName,
            key: randomUUID()
        }
        return "client funcionando"
    }
}