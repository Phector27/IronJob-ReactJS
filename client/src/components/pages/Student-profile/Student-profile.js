import React, { Component } from 'react'
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap'
import profileImage from './../../layout/Navigation/images/profiledefault.png'
import linkedinImage from './../../layout/Navigation/images/pngegg.png'
import githubLogo from './../../layout/Navigation/images/github_PNG83.png'
import Video from 'react-player'
import UserService from './../../../service/user.service'
import EditProfile from './edit-profile'
import './Student-profile.css'

export default class StudentProfile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: this.props.loggedUser,
            showEditUserModal: false
        }
        this.userService = new UserService()
    }

    handleUserModal = visible => this.setState({showEditUserModal: visible})

    render() {

        return (
            <>
                <Container className="student-profile">
                    <h1>Bienvenido a tu perfil, {this.props.loggedUser.name}</h1>
                    <hr />
                    <br />
                    <Button className="btn btn-block btn-dark" onClick={() => this.handleUserModal(true)}>Editar perfil</Button>
                    <Row className="hero-profile">
                        <Col md={4}>
                            <h2>Username:</h2>
                            <h3>{this.props.loggedUser.username}</h3>
                            <img
                                alt="User logo"
                                src={profileImage} 
                                className="d-inline-block align-top"
                            />
                        </Col>
                        
                            <Col md={4}>
                                <h2>Github profile:</h2>
                                <br />
                                <a href={this.props.loggedUser.githubProfile} target="_blank">
                                    <img
                                        alt="Github logo"
                                        src={githubLogo}
                                        className="d-inline-block align-top"
                                    />
                                </a>
                            </Col>
                            <Col md={4}>
                                <h2>Linkedin profile:</h2>
                                <br />
                                <a href={this.props.loggedUser.linkedInProfile} target="_blank">
                                    <img
                                        alt="Linkedin logo"
                                        src={linkedinImage}
                                        className="d-inline-block align-top"
                                    />
                                </a>
                            </Col>
                    </Row>
                        <Row>
                            <Col md={12} className="video">
                                <h2>Vídeo presentación:</h2>
                            <Video url={this.props.loggedUser.videoProfile} playing={true} volume={5} muted={true} />
                            </Col>
                        </Row>
                </Container>

                <Modal className="modal-create" size="lg" show={this.state.showEditUserModal} onHide={() => this.handleUserModal(false)}>
                    <Modal.Body>
                        <EditProfile  handleModal={() => this.handleUserModal(false)} storeUser={this.props.storeUser} loggedUser={this.state.user} />
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}