class HttpClient {

    constructor(path){
        this.baseUrl = path
    }

    async get(path){
        const contacts = await fetch(`${this.baseUrl}${path}`)
        return contacts.json()
    }
}

export default HttpClient
