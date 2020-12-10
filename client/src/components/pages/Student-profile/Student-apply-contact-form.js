import React from 'react';
import emailjs from 'emailjs-com'
// import { Container, Row, Col, Form } from 'react-bootstrap'

export default function ApplyForm(props) {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_9nz4mw7', 'template_jirrpvh', e.target, 'user_RA5RHpy3xvtV1TXFIqtIL')
            .then((result) => {
                console.log(result.text);
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
                            <input type="text" minLength="5" className="form-control" placeholder="Interesad@ en oferta..." name="subject" />
                        </div>
                        <div className="col-12 fieldsapply">
                            <textarea rows="8" id="" minLength="100" className="form-control" placeholder="Estás a un paso de cambiar tu vida! Indica porqué crees que tu perfil es perfecto para esta oferta :)" name="message"></textarea>
                        </div>
                        <div className="col-12 fieldsapply">
                            <input type="text" rows="1" className="form-control" placeholder="Adjuntar archivo" name="att"></input>
                        </div>
                        <div className="col-12 btns">
                            <input type="submit" className="btn btn-success btn-apply" value="Aplicar oferta y volver"></input>
                            <input type="reset" className="btn btn-dark btn-apply" value="Vacíar formulario"/>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}