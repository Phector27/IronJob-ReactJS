import { Col, Card, Button } from 'react-bootstrap'


const OfferCard = ({ title, study, name, location, style, description, email, deleteElement, handleModal }) => {

    return (
        <Col md={6}>
            <Card className="offer-card">
                <Card.Header className="offer-title">{title}</Card.Header>
                <Card.Body>
                    <Card.Title>{study} - {name}</Card.Title>
                    <Card.Text className="strong">{location} - {style}</Card.Text>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>Contacto: {email}</Card.Text>
                    <div className="expand">
                        <Button className="btn btn-sm" variant="dark" onClick={() => handleModal()}>Editar oferta</Button>
                        <Button className="btn btn-sm" variant="danger" onClick={() => deleteElement()}>Eliminar oferta</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default OfferCard