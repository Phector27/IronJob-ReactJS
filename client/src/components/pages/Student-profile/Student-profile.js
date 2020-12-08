import React, { Component } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import profileImage from './../../layout/Navigation/images/profiledefault.png'
import linkedinImage from './../../layout/Navigation/images/pngegg.png'
import githubLogo from './../../layout/Navigation/images/github_PNG83.png'
import Video from 'react-player'
import UserService from './../../../service/user.service'
import './Student-profile.css'

export default class StudentProfile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            profilePhoto: '',
            user: this.props.loggedUser._id
        }
        this.userService = new UserService()
    }

    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        e.preventDefault()

        this.userService
            .editProfile(this.props.loggedUser._id, this.state)
            .then(res => console.log(this.props.loggedUser))
            .catch(err => console.log(err))
    }

    componentDidMount = () => this.setState({ profilePhoto: this.props.loggedUser.profilePhoto })

    render() {

        return (
            <>
                <Container className="student-profile">
                    <h1>Bienvenido a tu perfil, {this.props.loggedUser.name}</h1>
                    <hr />
                    <br />
                    <Row className="hero-profile">
                        <Col md={4}>
                            <h2>Username:</h2>
                            <h3>{this.props.loggedUser.username}</h3>
                            <img
                                alt="User logo"
                                src={profileImage} // this.props.loggedUser.profilePhoto
                                className="d-inline-block align-top"
                            />
                            <Row>
                                <Col md={{ span: 8, offset: 2 }}>
                                    <Form onSubmit={this.handleSubmit}>
                                        <Form.Group controlId="profilePhoto">
                                            <Form.Label><small>Introduce URL de tu imagen</small></Form.Label>
                                            <Form.Control type="text" name="profilePhoto" onChange={this.handleInputChange} />
                                        </Form.Group>
                                        <Button variant="dark btn-block" type="submit">Editar foto de perfil</Button>
                                    </Form>
                                </Col>
                                </Row>
                        </Col>
                            <Col md={4}>
                                <h2>Github profile:</h2>
                                <br />
                                <a href={this.props.loggedUser.githubProfile} target="blank">
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
                                <a href={this.props.loggedUser.linkedInProfile} target="blank">
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
                        <Row>
                            <Col md={{ span: 10, offset: 1 }} className="presentacion">
                                <h2>Sobre ti:</h2>
                                <Form.Group controlId="descriptionUser">
                                    <Form.Control className="textarea" as="textarea" rows={10} type="text" name="descriptionUser" value={this.props.loggedUser.descriptionUser} onChange={this.handleInputChange} />
                                </Form.Group>
                            </Col>
                        </Row>
                </Container>
            </>
        )
    }
}