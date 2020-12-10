import { Col, Card, Button } from 'react-bootstrap'

const AllOfferCard = ({ title, study, name, location, style, description, referencia, handleModal }) => {

    return (
        <Col md={6}>
            <Card className="offer-card">
                <Card.Header style={{textAlign: 'center'}} className="offer-title">{title}</Card.Header>
                <Card.Body>
                    <Card.Title>{study} - {name}</Card.Title>
                    <Card.Text className="strong">{location} - {style}</Card.Text>
                    <Card.Text style={{fontWeight: '300'}}>{description}</Card.Text>
                    <Card.Text><p style={{fontWeight: 'bold'}}>Referencia de oferta: {referencia}</p></Card.Text>
                    <Button className="btn btn-md btn-block" variant="dark" onClick={() => handleModal()}>Me interesa</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default AllOfferCard