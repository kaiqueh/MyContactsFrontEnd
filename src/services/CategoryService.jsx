import HttpClient from "./Utils/HttpClient"

class CategoryService {

    constructor(){
        this.HttpClient = new HttpClient('http://localhost:3001')
    }

    ListCategories(){
        return this.HttpClient.get(`/categories`)
    }

}
export default new CategoryService
