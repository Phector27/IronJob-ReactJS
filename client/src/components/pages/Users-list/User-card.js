// import { Col, Card, Button} from 'react-bootstrap'


// const UserCard = ({ username, role, name, email, _id, profilePhoto, deleteElement, editElement }) => {

//     return (
//         <Col md={6} clasName="controlcard">
//             <Card className="offer-card">
//                 <Card.Header style={{ textAlign: 'center' }} className="offer-title">{name}
//                 </Card.Header>
//                 <Card.Body>
//                     <Card.Title>Username: <small>{username} - </small>
//                         <img
//                             src={profilePhoto}
//                             alt=""
//                             className="d-inline-block align-top"
//                         />
//                     </Card.Title>
//                     <Card.Text></Card.Text>
//                     <Card.Text>Email: <small>{email}</small></Card.Text>
//                     <Card.Text>Role: <small>{role}</small></Card.Text>
//                     <Card.Text>ID: <small>{_id}</small></Card.Text>
//                     <div className="expand">
//                         <Button className="btn btn-sm" variant="dark" onClick={() => editElement()}>Editar usuario</Button>
//                         <Button className="btn btn-sm" variant="danger" onClick={() => deleteElement()}>Eliminar usuario</Button>
//                     </div>
//                 </Card.Body>
//             </Card>
//         </Col>
//     )
// }

// export default UserCard

import { Col } from 'react-bootstrap'
import { Button } from 'semantic-ui-react'
import './User-Card.css'
const UserCard = ({ username, role, name, deleteElement, profilePhoto }) => {
    return (
        <Col md={4} style={{ paddingBottom: '50px' }}>
            <aside className="profile-card">
                <header>
                    <img src={profilePhoto} alt=""></img>
                    <h1>{name}</h1>
                    <h2>{username}</h2>
                    <h2>{role === 'Guest' ? <p style={{ color: 'red' }}>Invitado</p> : ''}</h2>
                    <h2>{role === 'BUSINESS-RECRUITER' ? <p style={{color: 'blue'}}>Company</p> : ''}</h2>
                    <h2>{role === 'Student' ? <p style={{ color: 'green' }}>Student</p> : ''}</h2>
                    <h2>{role === 'IRONHACK-RECRUITER' ? <p style={{color: 'black'}}>ADMIN</p> : ''}</h2>

                </header>
                <Button className="btn btn-sm btn-block" variant="danger" style={{ marginBottom: '10px' }} onClick={() => deleteElement()}>Eliminar usuario</Button>
                <Button className="btn btn-sm btn-block" variant="danger" style={{ marginBottom: '10px' }} >Editar permisos</Button>
            </aside>
        </Col>
    )
}
export default UserCard