import APIError from "../../error/APIError"
import { delay } from "../../utils/Delay"
class HttpClient {

    constructor(path) {
        this.baseUrl = path
    }

    async get(path) {
        this.MakeRequest(path)

    }

    async post(path, body) {
        this.MakeRequest(path, {
            method: 'POST',
            body
        })

    }

    async MakeRequest(path, Options) {

        const headers = new Headers()

        if(Options.body){
            headers.appeend('content-type', 'application/json');
            }


        const contacts = await fetch(`${this.baseUrl}${path}`, {
            method: Options.method,
            body: JSON.stringify(Options.body),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        let responsebody = null
        const contentType = contacts.headers.get('content-type')

        if (contentType.includes('application/json')) {
            responsebody = await contacts.json()
        }

        if (contacts.ok) {
            return responsebody
        }

        throw new APIError(contacts, responsebody)

    }




}

export default HttpClient
