import { Col, Card, Button } from 'react-bootstrap'

const CommentCard = ({ comment, valoration, student, deleteElement, handleModal, loggedUser, photo }) => {

    return (
        <Col sm={12} md={12} lg={12}>
            <Card className="comment-card">
                <Card.Body>
                    <Card.Title style={{ marginLeft: '20px' }}><strong>{student}</strong></Card.Title>
                    <Card.Text style={{ fontWeight: '300' }}><img
                        src={photo}
                        alt="User profile"
                        width='100px'
                        style={{ borderRadius: '50%', marginRight: '50px' }}
                    />{comment}</Card.Text>
                    <Card.Text style={{ fontWeight: '400' }}>Valoración de la plataforma: {valoration}</Card.Text>
                    <div className="expand">
                        {
                            student === loggedUser.username
                                ?
                                <Button className="btn btn-sm" variant="dark" onClick={() => handleModal()}>Editar comentario</Button>
                                :
                                ''
                        }
                        {
                            student === loggedUser.username
                                ?
                                <Button className="btn btn-sm" variant="danger" onClick={() => deleteElement()}>Eliminar comentario</Button>
                                :
                                ''
                        }

                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default CommentCard