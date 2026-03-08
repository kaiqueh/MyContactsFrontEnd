export default class APIError extends Error {

    constructor(response, body){
        super(response.Error || `${body} - ${response.statusText}`)
        this.name = 'APIError'
        this.response = response
        this.body = body
        this.message = response.Error || `${body} - ${response.statusText}`
    }

}

