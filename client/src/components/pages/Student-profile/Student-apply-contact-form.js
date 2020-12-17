import { useState } from 'react'
import React from 'react';
import emailjs from 'emailjs-com'
import FilesService from './../../../service/upload.service'
import { Container, Row, Form, Button } from 'react-bootstrap'

export default function ApplyForm(props) {

    const [curriculum, setCurriculum] = useState('curriculum')
    const [reference, setReference] = useState('reference')

    function handleImageUpload(e) {

        const filesService = new FilesService()
        const uploadData = new FormData()
        uploadData.append(e.target.name, e.target.files[0])

        filesService
            .uploadFile(uploadData)
            .then(response => {
                console.log(props)
                setCurriculum(response.data.secure_url)
                setReference(props.offer.reference)
            })
            .catch(err => this.setState({ error: 'Error al cargar el archivo. Vuelve a intentarlo' }))
    }

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_9nz4mw7', 'template_jirrpvh', e.target, 'user_RA5RHpy3xvtV1TXFIqtIL')
            .then((result) => {
                props.showToast()
            }, (error) => {
                console.log(error.text);
            });
        props.closeModal()
        e.target.reset()
    }

    return (
        <section className="contactUs">
            <Container>
                <Form onSubmit={sendEmail}>
                    <Row>
                        <h1> 🚀 ¡A un paso de cambiar tu vida! 🚀</h1>
                        <Form.Group constrolId="name" className="fieldsapply" style={{ width: '90%', marginTop: '40px' }}>
                            <Form.Control type="text" minLength="5" className="form-control" placeholder="Indica tu nombre y apellidos" name="name" />
                        </Form.Group>
                        <Form.Group constrolId="email" className="fieldsapply" style={{ width: '90%' }}>
                            <Form.Control type="email" minLength="5" className="form-control" placeholder="Indica tu email de contacto" name="email" />
                        </Form.Group>
                        <Form.Group constrolId="phone" className="fieldsapply" style={{ width: '90%' }}>
                            <Form.Control type="number" minLength="9" className="form-control" placeholder="Indica tu teléfono de contacto" name="phone" />
                        </Form.Group>
                        <Form.Group constrolId="subject" className="fieldsapply" style={{ width: '90%' }}>
                            <Form.Control type="text" readOnly className="form-control" value=
                                {
                                    reference === 'reference'
                                        ?
                                        'Adjunta tu CV para generar el número de oferta'
                                        :
                                        reference
                                } name="subject" />
                        </Form.Group>
                        <Form.Group constrolId="message" className="fieldsapply" style={{ width: '90%' }}>
                            <Form.Control as="textarea" rows="8" minLength="100" className="form-control" placeholder="Estás a un paso de cambiar tu vida! Indica porqué crees que tu perfil es perfecto para esta oferta :)" name="message" />
                        </Form.Group>
                        <Form.Group constrolId="curriculum" className="fieldsapply" style={{ width: '90%' }}>
                            <Form.Label style={{ marginLeft: '25px', fontWeight: '400', marginBottom: '-10px' }}>Adjunta tu CV 📄</Form.Label>
                            <h5 style={{ color: 'red', textAlign: 'center' }}>{props.error}</h5>
                            <Form.Control type="file" className="form-control" style={{ border: '1px transparent' }} onChange={handleImageUpload} name="curriculum" />
                        </Form.Group>
                        <Form.Group constrolId="curriculum1" className="fieldsapply" style={{ width: '90%' }}>
                            <Form.Control type="text" hidden className="form-control" value=
                                {
                                    curriculum === 'curriculum'
                                        ?
                                        'Cargando....'
                                        :
                                        curriculum
                                } name="curriculum1" />
                        </Form.Group>
                        <div className="col-12 btns">
                            <Button className="btn btn-success btn-apply" type="submit">Aplicar oferta y volver</Button>
                            <Button className="btn btn-dark btn-apply" type="reset">Vacíar formulario</Button>
                        </div>
                    </Row>
                </Form>
            </Container>
        </section>
    )
}