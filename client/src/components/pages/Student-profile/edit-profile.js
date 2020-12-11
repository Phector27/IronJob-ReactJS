import React, { Component } from 'react'
import UserService from './../../../service/user.service'
import { Form, Button } from 'react-bootstrap'
import FilesService from './../../../service/upload.service'


export default class EditProfile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            profilePhoto: '',
            githubProfile: '',
            linkedInProfile: '',
            videoProfile: '',
            descriptionUser: '',
            curriculum: ''
        }

        this.userService = new UserService()
        this.filesService = new FilesService()
    }

    componentDidMount = () => this.setState({
        name: this.props.loggedUser.name,
        profilePhoto: this.props.loggedUser.profilePhoto,
        githubProfile: this.props.loggedUser.githubProfile,
        linkedInProfile: this.props.loggedUser.linkedInProfile,
        videoProfile: this.props.loggedUser.videoProfile,
        descriptionUser: this.props.loggedUser.descriptionUser,
        curriculum: this.props.loggedUser.curriculum
    })

    handleInput = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        e.preventDefault()
        console.log('modal cerrada')

        this.userService
                .editProfile(this.props.loggedUser._id, this.state)
                .then(user => this.userService.getOneUser(user.data._id))
                .then(user => this.props.storeUser(user.data))
                .then(() => this.props.handleModal())
                .catch(err => console.log(err))
    }

    handleFilesImage = e => {
        const uploadImg = new FormData()
        uploadImg.append('profilePhoto', e.target.files[0])

        this.filesService
            .uploadFile(uploadImg)
            .then(response => this.setState({ profilePhoto: response.data.secure_url }))
            .catch(err => console.log('ERRORRR!', err))
    }

    handleFilesCV = e => {
        const uploadCV = new FormData()
        uploadCV.append('curriculum', e.target.files[0])

        this.filesService
            .uploadFile(uploadCV)
            .then(response => this.setState({ curriculum: response.data.secure_url}))
            .catch(err => console.log('ERRORRR!', err))
    }

    render() {

        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="name">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleInput} />
                </Form.Group>
                <Form.Group controlId="profilePhoto">
                    <Form.Label>Foto de perfil</Form.Label>
                    <Form.Control type="file" onChange={this.handleFilesImage} />
                </Form.Group>
                <Form.Group controlId="githubProfile">
                    <Form.Label>Perfil de Github</Form.Label>
                    <Form.Control type="text" name="githubProfile" value={this.state.githubProfile} onChange={this.handleInput} />
                </Form.Group>
                <Form.Group controlId="linkedInProfile">
                    <Form.Label>Perfil de LinkedIn</Form.Label>
                    <Form.Control type="text" name="linkedInProfile" value={this.state.linkedInProfile} onChange={this.handleInput} />
                </Form.Group>
                <Form.Group controlId="videoProfile">
                    <Form.Label>Video presentación</Form.Label>
                    <Form.Control type="text" name="videoProfile" value={this.state.videoProfile} onChange={this.handleInput} />
                </Form.Group>
                <Form.Group controlId="descriptionUser">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control as="textarea" rows="8" cols="30" name="descriptionUser" value={this.state.descriptionUser} onChange={this.handleInput} />
                </Form.Group>
                <Form.Group controlId="curriculum">
                    <Form.Label>Curriculum</Form.Label>
                    <Form.Control type="file" onChange={this.handleFilesCV} />
                </Form.Group>
                <Button variant="dark btn-block" type="submit">Editar perfil</Button>
            </Form>
        )
    }
}