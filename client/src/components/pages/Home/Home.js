import Slider1 from './../../shared/Slider/Slider'
import { Parallax } from 'react-parallax'
import { Container, Row, Col } from 'react-bootstrap'
import Footer from './Footer-Home/Home-footer'
import './home.css'
import Image from './images/photo-1482990673175-a0cb26bf62bc.jpeg'
import Image2 from './images/students.jpeg'

const image1 =
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'

const Home = () => {
    return (
        <>
            <Slider1 />
            <Container>
                <div className={'motivational'}> <i>Entendemos las necesidades del futuro y le damos solución en el presente.</i></div>
            </Container>
            <Container fluid="100vw">
                <Row>
                    <Col>
                        <Parallax
                            bgImage={image1}
                            strength={-700}>
                            <div className={'picaporte3'}>
                                <h1>COLOCAMOS EL TALENTO DONDE HACE FALTA</h1>
                                <h2>La mejor plataforma para poner el talento en el foco de sus necesidades</h2>
                            </div>
                            <div style={{ height: 300 }}></div>
                        </Parallax>
                    </Col>
                </Row>
            </Container>
            <div style={{ height: 50 }}></div>
            <section>
                <Container fluid className={'companyText'}>
                    <Row >
                        <Col md={6}>
                            <p>Nuestro trabajo es ahorrarte trabajo a ti. Ironjob se encarga de encontrar el mayor
                            talento emergente de las mejores
                            escuelas de tecnología y ponerlo a tu alcance en una sola plataforma.
                                <br />
                                <br />
                                Reducimos el coste de tu empresa en scouters y te brindamos los mayores talentos
                                nacionales e internacionales para
                                amoldar los profesionales actuales a tus necesidades del futuro.
                                <br />
                                <br />
                                Cada año profesionales con más de 10 años de experiencia en su ámbito y con el
                                conocimiento de lo que la industria
                                necesita forma a más de 500 alumnos en las ramas de
                                Full Stack Web Development, UI/UX y ciberseguridad para brindar a tu empresa de todo el
                                talento que pueda necesitar en
                                el momento en el que pueda necesitarlo.
                                <br />
                                <br />
                                El equipo docente de las escuelas con las que trabajamos son experimentados
                                profesionales que conocen el sector desde
                                dentro pudiendo dar una enseñanza especializada,
                                con las especificas convenciones que la especialidad actualmente trabaja y con la
                                capacidad de creación y adaptación al
                                medio que las empresas necesitan actualmente</p>
                        </Col>
                        <Col md={6}>
                            <img src={Image} alt='bussiness image'></img>
                        </Col>
                    </Row>
                    <div style={{ height: 50 }}></div>
                    <hr />
                    <div style={{ height: 100 }}></div>
                    <Row>
                        <Col md={6}>
                            <img src={Image2} alt='students image'></img>
                        </Col>
                        <Col md={6}>
                            <p>Nuestro trabajo es ahorrarte trabajo a ti. Ironjob se encarga de encontrar el mayor
                            talento emergente de las mejores
                            escuelas de tecnología y ponerlo a tu alcance en una sola plataforma.
                                <br />
                                <br />
                                Reducimos el coste de tu empresa en scouters y te brindamos los mayores talentos
                                nacionales e internacionales para
                                amoldar los profesionales actuales a tus necesidades del futuro.
                                <br />
                                <br />
                                Cada año profesionales con más de 10 años de experiencia en su ámbito y con el
                                conocimiento de lo que la industria
                                necesita forma a más de 500 alumnos en las ramas de
                                Full Stack Web Development, UI/UX y ciberseguridad para brindar a tu empresa de todo el
                                talento que pueda necesitar en
                                el momento en el que pueda necesitarlo.
                                <br />
                                <br />
                                El equipo docente de las escuelas con las que trabajamos son experimentados
                                profesionales que conocen el sector desde
                                dentro pudiendo dar una enseñanza especializada,
                                con las especificas convenciones que la especialidad actualmente trabaja y con la
                                capacidad de creación y adaptación al
                                medio que las empresas necesitan actualmente</p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}
export default Home