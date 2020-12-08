import React, { Component } from 'react'
import UserService from '../../../service/user.service'
import { Container, Row } from 'react-bootstrap'
import UserCard from './User-card'
import Loader from '../../shared/Loader/Loader'

class UsersList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: undefined,
        }

        this.userService = new UserService()
    }

    componentDidMount = () => this.refreshOfferList()

    refreshOfferList = () => {
        this.userService
            .getUsers()
            .then(res => this.setState({ users: res.data }))
            .catch(err => console.log(err))
    }

    deleteUser = userId => {
        this.userService
            .deleteUser(userId)
            .then(() => this.refreshOfferList())
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <Container className="offer-list">
                    <h1>Usuarios activos</h1>
                    <hr /> <br />
                    <br /> <br />
                    <Row>
                        {
                            this.state.users
                                ?
                                this.state.users.map(elm => <UserCard key={elm._id} {...elm} deleteElement={() => this.deleteUser(elm._id)} />)
                                :
                                <Loader/>
                        }
                    </Row>
                </Container>
            </>
        )
    }
}

export default UsersList