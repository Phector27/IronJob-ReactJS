import axios from 'axios'

export default class AuthService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'http://localhost:5000/api/auth',
            withCredentials: true
        })
    }

    signup = (username, password, name) => this.apiHandler.post('/signup', {username, password, name})
    login = credentials => this.apiHandler.post('/login', credentials)
    logout = () => this.apiHandler.post('/logout')
    isLoggedIn = () => this.apiHandler.get('/loggedin')
}