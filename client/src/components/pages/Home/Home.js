import Slider1 from './../../shared/Slider/Slider'
import { Parallax } from 'react-parallax'
import { Container } from 'react-bootstrap'
import Footer from './Footer-Home/Home-footer'
import './home.css'


const image1 =
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
const Home = () => {

    return (
        <>
            <Slider1 />
            <Container>
                        <div className={'motivational'}> COLOCAMOS EL TALENTO DONDE HACE FALTA</div>
            </Container>
            <Parallax
                bgImage={image1}
                strength={-700}>
                <div className={'picaporte3'}>
                    <h1>COLOCAMOS EL TALENTO DONDE HACE FALTA</h1>
                    <h2>La mejor plataforma para poner el talento donde se merece, calentito del horno papi</h2>
                </div>
                <div style={{ height: 800 }}></div>
                
            </Parallax>
            <Footer />
    </>
    )
}

export default Home