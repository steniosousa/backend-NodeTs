type datasForEdit = {
    oldName:String;
    oldPass:String;
    newName:String;
    newPass:String

}
export class editClientService{
    async edit(oldName,oldPass,newName,newPass):Promise<string>{
        const editClient ={
            oldName,
            oldPass,
            newName,
            newPass
        }
        return "fé"
    }
}