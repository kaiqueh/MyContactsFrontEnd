import HttpClient from "./Utils/HttpClient"

class ContactService {

    constructor(){
        this.HttpClient = new HttpClient('http://localhost:3001')
    }

    ListContact(orderBy = 'asc'){
        return this.HttpClient.get(`/contacts/121232?orderBy=${orderBy}`)
    }

    createContact(contact){
        return this.HttpClient.post('/contacts', contact)
    }
}
export default new ContactService
