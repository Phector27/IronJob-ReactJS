import React, { Component } from 'react'
import UserService from '../../../service/user.service'
import { Container, Row, Modal } from 'react-bootstrap'
import UserCard from './User-card'
import Loader from '../../shared/Loader/Loader'
import SearchBarName from './../../shared/Searchbar/Searchbar-name'
import RoleEdit from './../../Users-edit/User-edit'

class UsersList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: undefined,
            usersSearch: undefined,
            showEditRoleModal: false,
            userToEdit: undefined,
            error: ''
        }

        this.userService = new UserService()
    }

    openRoleEditModal = userId => {
        this.setState({ userToEdit: userId })
        this.handleEditRoleModal(true)
    }

    componentDidMount = () => this.refreshOfferList()

    refreshOfferList = () => {
        this.userService
            .getUsers()
            .then(res => this.setState({ users: res.data, usersSearch: res.data }))
            .catch(err=> this.setState({error: 'Error al cargar el panel de control.' }))
    }

    deleteUser = userId => {
        this.userService
            .deleteUser(userId)
            .then(() => this.refreshOfferList())
            .catch(err=> this.setState({error: 'Error al eliminar usuario.' }))
    }

    searchFor = search => {
        const copyUsers = [...this.state.usersSearch]
        const filterUsers = copyUsers.filter(elm => elm.name.toLowerCase().includes(search.toLowerCase()))
        this.setState({ users: filterUsers })
    }
    
    handleEditRoleModal = (visible) => this.setState({ showEditRoleModal: visible })

    render() {
        const sortUsers = this.state.users ? this.state.users.sort((a, b) => (a.role > b.role) ? 1 : -1) : <Loader />
        return (
            <>
                <Container className="offer-list">
                    <h1 style={{fontWeight: '300'}}>Panel de control</h1>
                    <br />
                    <SearchBarName searchFor={value => this.searchFor(value)}/>
                    <hr /> <br />
                    <h5 style={{color: 'red', textAlign: 'center'}}>{this.state.error}</h5>
                    <Row>
                        {
                            this.state.users
                                ?
                                sortUsers.map(elm => <UserCard key={elm._id} {...elm} deleteElement={() => this.deleteUser(elm._id)} defineUser={id => this.openRoleEditModal(id)}/>)
                                :
                                <Loader/>
                        }
                    </Row>
                </Container>
                <Modal className="modal-create" size="md" show={this.state.showEditRoleModal} onHide={() => this.handleEditRoleModal(false)}>
                    <Modal.Body>
                        <RoleEdit closeModal={() => this.handleEditRoleModal(false)} userId={this.state.userToEdit} updateList={this.refreshOfferList} />
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}

export default UsersList