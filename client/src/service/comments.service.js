import axios from 'axios'

export default class CommentService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'http://localhost:5000/api/comments',
            withCredentials: true
        })
    }

    getComments = () => this.apiHandler.get('/getAllComments')
    newComment = CommentInfo => this.apiHandler.post(`/newComment`, CommentInfo)
    deleteComment = CommentIdDeleted => this.apiHandler.delete(`/delete/${CommentIdDeleted}`)
    editComment = (CommentId, CommentInfo) => this.apiHandler.put(`/editComment/${CommentId}`, CommentInfo)
}