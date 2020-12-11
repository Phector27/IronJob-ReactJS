import { useState, useEffect } from 'react'
import React from 'react';
import emailjs from 'emailjs-com'
import FilesService from './../../../service/upload.service'
// import { Container, Row, Col, Form } from 'react-bootstrap'

export default function ApplyForm(props) {

    const [curriculum, setCurriculum] = useState('curriculum')


    function handleImageUpload(e) {

        const filesService = new FilesService()
        const uploadData = new FormData()
        uploadData.append(e.target.name, e.target.files[0])
        console.log('ESTO ES UNA IMAGEN EN MEMORIA:', e.target.files[0])


        // this.setState({ uploadingActive: true })

        filesService
            .uploadFile(uploadData)
            .then(response => {
                console.log(props)
                setCurriculum(response.data.secure_url)
            })
            .catch(err => console.log('ERRORRR!', err))
    }

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_9nz4mw7', 'template_jirrpvh', e.target, 'user_RA5RHpy3xvtV1TXFIqtIL')
            .then((result) => {
                console.log('Tu mensaje ha sido enviado con éxito. Mucha suerte!', result.text);
                console.log(props)
            }, (error) => {
                console.log(error.text);
            });
        props.closeModal()
        e.target.reset()
    }

    return (


        <section className="contactUs">
            <div className="container">
                <form onSubmit={sendEmail}>
                    <div className="row">
                        <h1> 🚀 ¡A un paso de cambiar tu vida! 🚀</h1>
                        <div className="col-12 fieldsapply">
                            <input type="text" minLength="5" className="form-control" placeholder="Indica tu nombre y apellidos" name="name" />
                        </div>

                        <div className="col-12 fieldsapply">
                            <input type="email" minLength="5" className="form-control" placeholder="Indica tu email de contacto" name="email" />
                        </div>
                        <div className="col-12 fieldsapply">
                            <input type="number" minLength="9" className="form-control" placeholder="Indica tu teléfono de contacto" name="phone" />
                        </div>
                        <div className="col-12 fieldsapply">
                            <input type="text" minLength="5" className="form-control" placeholder="Indica el número de oferta" name="subject" />
                        </div>
                        <div className="col-12 fieldsapply">
                            <textarea rows="8" id="" minLength="100" className="form-control" placeholder="Estás a un paso de cambiar tu vida! Indica porqué crees que tu perfil es perfecto para esta oferta :)" name="message"></textarea>
                        </div>
                        <div className="col-12 fieldsapply">
                            <label style={{ marginLeft: '25px', fontWeight: '400', marginBottom: '-10px' }}>Adjunta tu CV 📄</label>
                            <input type="file" className="form-control" style={{border: '1px transparent'}}  onChange={handleImageUpload} name="curriculum"></input>
                        </div>
                        <div className="col-12 fieldsapply">

                            <input type="text" hidden className="form-control" value=
                                {
                                    curriculum === 'curriculum'
                                        ?
                                        'Cargando....'
                                        :
                                        curriculum
                                }
                                name="curriculum1"></input>
                        </div>
                        <div className="col-12 btns">
                            <input type="submit" className="btn btn-success btn-apply" value="Aplicar oferta y volver"></input>
                            <input type="reset" className="btn btn-dark btn-apply" value="Vacíar formulario" />
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}