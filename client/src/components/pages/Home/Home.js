import Slider1 from './../../shared/Slider/Slider'
import { Parallax } from 'react-parallax'
import { Container, Row, Col } from 'react-bootstrap'
import FooterHome from './Footer-Home/Home-footer'
import './home.css'
import Image from './images/photo-1482990673175-a0cb26bf62bc.jpeg'
import Image2 from './images/students.jpeg'

const image1 =
    'https://res.cloudinary.com/phector27/image/upload/v1608028788/cv-webuild/Home_euo0z4.jpg'

const Home = () => {
    return (
        <>
            <Slider1 />
            <Container>
                <div className='motivational'> <i>Entendemos las necesidades del futuro y le damos solución en el presente.</i></div>
            </Container>
            <Container fluid="100vw" id="conocenos">
                <Row>
                    <Col>
                        <Parallax
                            bgImage={image1}
                            strength={-700}>
                            <div className='section2'>
                                <h1>COLOCAMOS EL TALENTO DONDE HACE FALTA</h1>
                                <h2>La mejor plataforma para poner el talento en el foco de sus necesidades</h2>
                            </div>
                            <div style={{ height: 300 }}></div>
                        </Parallax>
                    </Col>
                </Row>
            </Container>
            <div style={{ height: 50 }} id="ofrecemos"></div>
            <section>
                <Container fluid="100vw" className='companyText'>
                    <Row>
                        <Col sm={10} md={10} lg={6}>
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
                        <Col sm={10} md={10} lg={6}>
                            <img style={{maxWidth: '100%'}} src={Image} alt='bussiness logo'></img>
                        </Col>
                    </Row>
                    <div style={{ height: 50 }}></div>
                    <hr />
                    <div style={{ height: 100 }}></div>
                    <Row>
                        <Col sm={10} md={10} lg={6}>
                            <img style={{maxWidth: '90%'}} src={Image2} alt='students logo'></img>
                        </Col>
                        <Col sm={10} md={10} lg={6}>
                                <p>Ironhack es una Tech School que está formando la próxima generación de creadores digitales mediante cursos intensivos de 9 o 24 semanas en Desarrollo Web, Diseño UX/UI & Análisis de Datos. 
                                <br />
                                <br />
                                Ironhack cuenta con 9 campus alrededor del mundo en ciudades como Amsterdam, Barcelona, Berlín, Lisboa, Madrid, Ciudad de México, Miami, París y Sao Paulo.
                                <br />
                                <br />
                                La metodología de aprendizaje que siguen en Ironhack está enfocada en aprender y manejar las herramientas y aplicaciones tecnológica que hoy por hoy dan trabajo. 
                                Es importante destacar que Ironhack centran muchos de sus esfuerzos en garantizar el acceso laboral de los egresados. 
                                Cuentan con una red de más de 600 empresas que contratan alumnos del centro.
                                <br />
                                <br />
                                Ironhack cuenta con más de 4 años de experiencia en la formación de programas especializados en el área tecnológica.
                                <br />
                                <br />
                                Desde los inicios de su actividad formativa han conseguido ayudar a su alumnado a alcanzar el éxito profesional y 
                                han adquirido un conocimiento profundo sobre el ecosistema digital.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <FooterHome />
        </>
    )
}
export default Home