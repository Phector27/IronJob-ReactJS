import { Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'



const AllOfferCard = ({ title, study, name, location, style, description, email}) => {

    return (
        <Col md={6}>
            <Card className="offer-card">
                <Card.Header className="offer-title">{title}</Card.Header>
                <Card.Body>
                    <Card.Title>{study} - {name}</Card.Title>
                    <Card.Text className="strong">{location} - {style}</Card.Text>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>Contacto: {email}</Card.Text>
                    <Link className="btn btn-light btn-block" to="/student/apply">Me interesa</Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default AllOfferCard