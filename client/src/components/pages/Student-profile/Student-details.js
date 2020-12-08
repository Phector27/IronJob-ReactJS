// import { Col, Button } from 'react-bootstrap'

// const StudentDetails = ({ profilePhoto, githubProfile, linkedInProfile, handleModal }) => {

//     return (
//         <Row className="hero-profile">
//             <Button className="btn btn-sm" variant="dark" onClick={() => handleModal()}>Editar perfil</Button>
//                         <Col md={4}>
//                             <h2>Foto de perfil:</h2>
//                             <br />
//                             <img
//                                 alt="User photo"
//                                 src={profilePhoto}
//                                 className="d-inline-block align-top"
//                             />
//                             <Row>
//                                 <Col md={{ span: 8, offset: 2 }}>
//                                     <Form onSubmit={this.handleSubmit}>
//                                         <Form.Group controlId="profilePhoto">
//                                             <Form.Label><small>Introduce URL de tu imagen</small></Form.Label>
//                                             <Form.Control type="text" name="profilePhoto" onChange={this.handleInputChange} />
//                                         </Form.Group>
//                                         <Button variant="dark btn-block" type="submit">Editar foto de perfil</Button>
//                                     </Form>
//                                 </Col>
//                                 </Row>
//                         </Col>
//                             <Col md={4}>
//                                 <h2>Github profile:</h2>
//                                 <br />
//                                 <a href={githubProfile} target="blank">
//                                     <img
//                                         alt="Github logo"
//                                         src={githubLogo}
//                                         className="d-inline-block align-top"
//                                     />
//                                 </a>
//                             </Col>
//                             <Col md={4}>
//                                 <h2>Linkedin profile:</h2>
//                                 <br />
//                                 <a href={linkedInProfile} target="blank">
//                                     <img
//                                         alt="Linkedin logo"
//                                         src={linkedinImage}
//                                         className="d-inline-block align-top"
//                                     />
//                                 </a>
//                             </Col>
//                     </Row>
//     )
// }

// export default StudentDetails