import axios from 'axios'

export default class FilesService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'http://localhost:5000/api/files',
            withCredentials: true
        })
    }

    uploadFile = fileForm => this.apiHandler.post('/upload', fileForm)
    uploadPhoto = photoForm => this.apiHandler.post('/upload/photo', photoForm)
}