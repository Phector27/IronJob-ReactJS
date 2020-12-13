import React, { Component } from 'react'
import UserService from './../../../service/user.service'
import { Form, Button } from 'react-bootstrap'
import FilesService from './../../../service/upload.service'
import Loader from './../../shared/Loader/Loader'

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
            curriculum: '',
            uploadingPhotoActive: false,
            uploadingCvActive: false
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
        curriculum: this.props.loggedUser.curriculum,
        cvitae: this.props.loggedUser.cvitae
    })

    handleInput = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        e.preventDefault()

        this.userService
                .editProfile(this.props.loggedUser._id, this.state)
                .then(user => this.userService.getOneUser(user.data._id))
                .then(user => this.props.storeUser(user.data))
                .then(() => this.props.handleModal())
                .catch(err => console.log(err))
    }

    handleFilesImage = e => {
        const uploadImg = new FormData()
        uploadImg.append(e.target.name, e.target.files[0])

        this.setState({ uploadingPhotoActive: true })

        this.filesService
            .uploadPhoto(uploadImg)
            .then(response => {
                this.setState({
                    profilePhoto: response.data.secure_url,
                    uploadingPhotoActive: false
                })
            })
            .catch(err => console.log('UPLOADING ERROR', err))
    }

    handleFilesCV = e => {
        const uploadCV = new FormData()
        uploadCV.append(e.target.name, e.target.files[0])

        this.setState({ uploadingCvActive: true })

        this.filesService
            .uploadCV(uploadCV)
            .then(response => {
                this.setState({
                    cvitae: response.data.secure_url,
                    uploadingCvActive: false
                })
            })
            .catch(err => console.log('UPLOADING ERROR', err))
    }


    render() {

        return (
            <Form onSubmit={this.handleSubmit}>
                <h1 style={{ textAlign: 'center', fontWeight: '400' }}>Mi perfil</h1>
                <hr />
                <Form.Group controlId="name">
                    <Form.Label style={{marginLeft: '15px', fontWeight: '400', marginTop: '10px'}}>Nombre y apellidos:</Form.Label>
                    <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleInput} />
                </Form.Group>
                <Form.Group controlId="profilePhoto">
                    <Form.Label style={{marginLeft: '15px', fontWeight: '400', marginTop: '10px'}}>{this.state.uploadingPhotoActive ? <Loader /> : 'Foto de perfil:'}</Form.Label>
                    <Form.Control style={{marginLeft: '15px'}} type="file" name="profilePhoto" onChange={this.handleFilesImage} />
                </Form.Group>
                <Form.Group controlId="githubProfile">
                    <Form.Label style={{marginLeft: '15px', fontWeight: '400', marginTop: '10px'}}>Perfil de Github:</Form.Label>
                    <Form.Control type="text" name="githubProfile" value={this.state.githubProfile} onChange={this.handleInput} />
                </Form.Group>
                <Form.Group controlId="linkedInProfile">
                    <Form.Label style={{marginLeft: '15px', fontWeight: '400', marginTop: '10px'}}>Perfil de LinkedIn:</Form.Label>
                    <Form.Control type="text" name="linkedInProfile" value={this.state.linkedInProfile} onChange={this.handleInput} />
                </Form.Group>
                <Form.Group controlId="videoProfile">
                    <Form.Label style={{marginLeft: '15px', fontWeight: '400', marginTop: '10px'}}>Video presentación:</Form.Label>
                    <Form.Control type="text" name="videoProfile" value={this.state.videoProfile} onChange={this.handleInput} />
                </Form.Group>
                <Form.Group controlId="descriptionUser">
                    <Form.Label style={{marginLeft: '15px', fontWeight: '400', marginTop: '10px'}}>Descripción:</Form.Label>
                    <Form.Control as="textarea" rows="4" cols="30" name="descriptionUser" placeholder="Cuenta como eres, si prefieres trabajar en equipo o en solitario, tus soft skills... Recuerda que todo suma!" value={this.state.descriptionUser} onChange={this.handleInput} />
                </Form.Group>
                <Form.Group controlId="cvitae">
                    <Form.Label style={{marginLeft: '15px', fontWeight: '400', marginTop: '10px'}}>{this.state.uploadingCvActive ? <Loader /> : 'Curriculum:'}</Form.Label>
                    <Form.Control  style={{marginLeft: '15px', marginBottom: '30px'}} type="file" name="cvitae" onChange={this.handleFilesCV} />
                </Form.Group>
                <Button variant="dark btn-block" type="submit">{this.state.uploadingPhotoActive || this.state.uploadingCvActive ? 'Cargando... Espera a que se suban los archivos.' : 'Actualizar perfil'}</Button>
            </Form>
        )
    }
}