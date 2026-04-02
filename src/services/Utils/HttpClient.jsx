import APIError from "../../error/APIError"
import { delay } from "../../utils/Delay"
class HttpClient {

    constructor(path) {
        this.baseUrl = path
    }

    async get(path) {
        const contacts = await fetch(`${this.baseUrl}${path}`)

        // await delay(500)

        let body = null
        const contentType = contacts.headers.get('content-type')

        if (contentType.includes('application/json')) {
            body = await contacts.json()
        }

        if (contacts.ok) {
            return body
        }

        throw new APIError(contacts, body)

    }

    async post(path, body) {

        const headers = new Headers({
            'content-type': 'application/json'
        })

        const contacts = await fetch(`${this.baseUrl}${path}`, {
            method: 'POST',
            body: JSON.stringify(body),
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
