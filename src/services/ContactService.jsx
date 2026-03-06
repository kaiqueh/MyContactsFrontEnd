import HttpClient from "./Utils/HttpClient"

class ContactService {

    constructor(){
        this.HttpClient = new HttpClient('http://localhost:3001')
    }

    ListContact(orderBy = 'asc'){
        return this.HttpClient.get(`/contacts?orderBy=${orderBy}`)
    }
}
export default new ContactService

