import { Col, Row, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Welcome = () => {
    const christmasImage = 'https://res.cloudinary.com/phector27/image/upload/v1608123052/cv-webuild/NAVIDAD1-removebg-preview_wc2jiv.png'
    const pool = 'https://res.cloudinary.com/phector27/image/upload/v1608199197/cv-webuild/Pngtree_free_cartoon_swimming_pool_water_4522637_qe6mwz.png'
    return (
        <Container>
            <Row>
                <Col style={{ marginTop: '250px', marginBottom: '180px', color: '#01024ec4' }}>
                    <h2 style={{ fontWeight: 'bold', textAlign: 'center' }}>Bienvenid@ a IronJob.</h2>
                    <hr /><br />
                    <p style={{ fontWeight: '300' }}>Tu perfil está siendo revisado por un administrador de IronHack. Pronto podrás disfrutar de la mejor plataforma de empleo.</p>
                    <p style={{ fontWeight: '300' }}>Los accesos y funcionalidades de la plataforma estarán disponibles en unos minutos. Mientras tanto, puedes acompañar a nuestro reno <strong>Renardo</strong> por las diretentes áreas de la web, a ver si consigue pescar un empleo :)</p>
                    <div style={{ textAlign: 'center', marginTop: '50px', marginBottom: '-100px' }}>
                        <img style={{
                            marginLeft: '-90px', marginTop: '300px', width: '20%', position: 'absolute'}} src={pool} alt="Pool logo" />
                        <Link id="rotate" to="/" variant="dark" className="btn btn-dark" style={{ marginTop: '91px' }}>Volver a inicio</Link>
                        <img style={{ marginLeft: '-120px' }} src={christmasImage} alt="Renus logo" />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Welcome