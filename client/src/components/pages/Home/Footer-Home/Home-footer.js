import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {

    const ironJob = "https://ironjob.herokuapp.com/"
    const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d538.8291110508!2d-4.457937942016209!3d40.18508319565306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4035b57551b6f3%3A0x84be095154d712f6!2sCalle%20Falsa%2C%2045908%20Aldea%20en%20Cabo%2C%20Toledo!5e0!3m2!1ses!2ses!4v1607529222158!5m2!1ses!2ses"
    const twitterLink = "http://www.twitter.com/job_iron"
    const twitterImg = "https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c53e.png"
    const instagramLink = "http://www.instagram.com/ironjobes"
    const instagramImg = "https://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png"
    const facebookLink = "https://www.facebook.com/IronJob-104079551548311/"
    const facebookImg = "https://assets.stickpng.com/images/584ac2d03ac3a570f94a666d.png"
    const whatsAppImg = "https://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
    const whatsAppLink = "https://api.whatsapp.com/send?phone=34640254348&text=%20Hola!%20contacto%20con%20vosotros por..."

    return (
        <section style={{ marginBottom: '100px', marginTop: '150px' }}>
            <Container>
                <Row>
                    <Col md={{ span: 4, offset: 4 }} style={{ marginBottom: '25px' }}>
                        <a href={ironJob} className="btn btn-lg btn-block btn-outline-dark" target="blank">IronJob España</a>
                    </Col>
                </Row>
                <Row>
                    <iframe src={mapSrc} style={{ width: "70vw", height: "40vh", border: '0' }} title="maps"></iframe>
                </Row>
                <Row>
                    <Col md={{ span: 6, offset: 3 }} style={{ marginTop: '25px', textAlign: 'center' }}>
                        <h3>IronJob España</h3>
                        <hr />
                        <p><i>Calle falsa 123.</i></p>
                        <p><i>45908 Aldea en Cabo, Toledo.</i></p>
                        <br />
                    </Col>
                </Row>
                <Row>
                    <article className="RRSS">
                        <Col>
                            <a href={twitterLink} target="blank" className='twitter'><img src={twitterImg} alt="twiter logo"></img></a>
                            <a href={instagramLink} target="blank" className='instagram'><img src={instagramImg} alt="instagram logo"></img></a>
                            <a href={facebookLink} target="blank" className='facebook'><img src={facebookImg} alt="facebook logo"></img></a>
                            <a href={whatsAppLink} target="blank" className='whatsapp'><img src={whatsAppImg} alt="whatsapp logo"></img></a>
                        </Col>
                    </article>
                </Row>

            </Container>
        </section>
    )
}

export default Footer