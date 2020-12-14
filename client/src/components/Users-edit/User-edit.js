import React, { Component } from 'react'
import UserService from './../../service/user.service'
import { Container, Button, Form } from 'react-bootstrap'


class RoleEdit extends Component {

    constructor(props) {
        super(props)
        this.state = {
            role: undefined,
            allRoles: ['Student', 'BUSINESS-RECRUITER', 'IRONHACK-RECRUITER', 'Guest', 'Inactive']
        }
        this.userService = new UserService()
    }

    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        e.preventDefault()

        this.userService
            .editProfile(this.props.userId, { role: this.state.role })
            .then(() => {
                this.props.closeModal()
                this.props.updateList()
            })
            .catch(err => console.log(err))
    }

    componentDidMount = () => {
        this.userService
            .getOneUser(this.props.userId)
            .then(user => this.setState({ role: user.data.role }))
            .catch(err => console.log(err))
    }

    render() {
        return (

            <Container>
                <h1>Editar permisos de usuario</h1>
                <hr />
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="role">
                        <Form.Label style={{fontWeight: '400'}}>Permisos</Form.Label>
                        <Form.Control as="select" name="role" value={this.state.role} onChange={this.handleInputChange}>
                            {this.state.allRoles.map((elm, idx) => <option key={idx} value={elm}>{elm}</option>)}
                        </Form.Control>
                    </Form.Group>
                    <Button variant="dark btn-block" type="submit">Actualizar permisos</Button>
                </Form>
            </Container>
        )
    }
}

export default RoleEdit