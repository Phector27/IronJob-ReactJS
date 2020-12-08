import { Col, Card, Button } from 'react-bootstrap'


const UserCard = ({ username, role, name, deleteElement }) => {

    return (
        <Col md={6}>
            <Card className="offer-card">
                <Card.Header className="offer-title">{name}</Card.Header>
                <Card.Body>
                    <Card.Title>Username: <small>{username}</small></Card.Title>
                    <Card.Text></Card.Text>
                    <Card.Text>Role: <small>{role}</small></Card.Text>
                    <div className="expand">
                        <Button className="btn btn-sm btn-block" variant="danger" onClick={() => deleteElement()}>Eliminar usuario</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default UserCard