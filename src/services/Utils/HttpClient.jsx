import APIError from "../../error/APIError"
class HttpClient {

    constructor(path) {
        this.baseUrl = path
    }

    async get(path) {
        const contacts = await fetch(`${this.baseUrl}${path}`)

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


}

export default HttpClient
