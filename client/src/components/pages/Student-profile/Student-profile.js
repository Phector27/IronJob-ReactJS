import React, { Component } from 'react'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import linkedinImage from './../../layout/Navigation/images/pngegg.png'
import githubLogo from './../../layout/Navigation/images/github_PNG83.png'
import adobeLogo from './../../layout/Navigation/images/pedefe.png'
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

    handleUserModal = visible => this.setState({ showEditUserModal: visible })

    render() {

        return (
            <>
                <Container className="student-profile">
                    <h1 style={{marginTop: '150px'}}>Bienvenido a tu perfil, {this.props.loggedUser.name}</h1>
                    <hr />
                    <br />
                    <Button className="btn btn-dark" style={{marginBottom: '50px'}} onClick={() => this.handleUserModal(true)}>Editar perfil ✍️</Button>
                    <Row className="hero-profile">
                        <Col md={3}>
                            <h2 style={{fontWeight: '300'}} className="username">Usuario:</h2>
                            <h3>{this.props.loggedUser.username}</h3>
                            <img
                                alt="User logo"
                                src={this.props.loggedUser.profilePhoto}
                                className="d-inline-block align-top"
                            />
                        </Col>

                        <Col md={3}>
                            <h2 style={{fontWeight: '300'}} className="github">Github profile:</h2>
                            <br />
                            <a href={this.props.loggedUser.githubProfile} target="_blank" rel="noreferrer">
                                <img
                                    alt="Github logo"
                                    src={githubLogo}
                                    className="d-inline-block align-top"
                                />
                            </a>
                        </Col>
                        <Col md={3}>
                            <h2 style={{fontWeight: '300'}} className="linkedin">Linkedin profile:</h2>
                            <br />
                            <a href={this.props.loggedUser.linkedInProfile} target="_blank" rel="noreferrer">
                                <img
                                    alt="Linkedin logo"
                                    src={linkedinImage}
                                    className="d-inline-block align-top"
                                />
                            </a>
                        </Col>
                        <Col md={3}>
                            <h2 style={{fontWeight: '300'}} className="pdfLogo">Curriculum:</h2>
                            <br />
                            <a href={this.props.loggedUser.cvitae} target="_blank" rel="noreferrer">
                                <img
                                    alt="Adobe PDF logo"
                                    src={adobeLogo}
                                    className="d-inline-block align-top"
                                />
                            </a>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={8} className="video" style={{ marginTop: '75px'}}>
                            <h2 style={{fontWeight: '300'}}>Vídeo presentación:</h2>
                            <Video url={this.props.loggedUser.videoProfile} playing={true} volume={5} muted={true} />
                        </Col>

                        <Col lg={4} style={{ marginTop: '75px'}}>
                            <h2 style={{fontWeight: '300'}}>Descripción:</h2>
                            <p style={{fontSize: '1.1em', textAlign: 'initial'}}>{this.props.loggedUser.descriptionUser}</p>
                        </Col>
                    </Row>
                </Container>

                <Container style={{marginBottom: '100px'}}>
                    <h4 className="handwriting" style={{textAlign: 'center'}}>El talento gana partidos, pero el trabajo en equipo y la inteligencia ganan campeonatos. — <i><b>Michael Jordan</b></i></h4>
                </Container>

                <Modal className="modal-create" size="lg" show={this.state.showEditUserModal} onHide={() => this.handleUserModal(false)}>
                    <Modal.Body>
                        <EditProfile handleModal={() => this.handleUserModal(false)} storeUser={this.props.storeUser} loggedUser={this.state.user} />
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}