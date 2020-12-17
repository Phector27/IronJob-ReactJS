import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Post = () => {
    const christmasImage = 'https://res.cloudinary.com/phector27/image/upload/v1608123052/cv-webuild/NAVIDAD1-removebg-preview_wc2jiv.png'
    return (
        <Col style={{ marginTop: '150px', marginBottom: '100px', color: '#01024ec4' }}>
            
            <h4 style={{ fontWeight: 'bold' }}> 4 Consejos para encontrar empleo con IronJob.</h4>
            <h5 style={{ fontWeight: '300', fontSize: '.8em' }}>Héctor Carramiñana. <small><b>18-12-2020</b></small></h5>
            <hr /><br />
            <p style={{ fontWeight: 'bold' }}>1 - Completa tu perfil</p>
            <p style={{ fontWeight: '300' }}>Es muy importante que tengas tu perfil actualizado junto con los diferentes enlaces al día, para que podamos ayudarte a cambiar tu destino. No olvides subir tu CV en formato PDF o JPG, subir un vídeo de presentación en el que nos cuentes lo buen@ que eres </p>
            <p style={{ fontWeight: 'bold' }}>2 - Carta de presentación</p>
            <p style={{ fontWeight: '300' }}>Un buen ejemplo de carta de presentación no sólo cumple la función de acompañar al CV, además te permite complementar tu Curriculum Vitae, indicarle a la empresa el tipo de puesto de trabajo que estás buscando, motivar al responsable de recursos humanos a leer tu currículum con detenimiento, demostrar brevemente tus conocimientos acerca del sector empresarial, la oferta de empleo o la compañía y adaptar tus conocimientos, formación y capacidades a la oferta de empleo, sin tener que volver a reescribir el Curriculum Vitae.</p>
            <p style={{ fontWeight: 'bold' }}>3 - Potencia tus capacidades</p>
            <p style={{ fontWeight: '300' }}>Nuestros valores (o Ironvalues) son: pasión por encima de todo, amar a las personas y sus historias y can-do attitude. Buscamos estudiantes que estén dispuestos a trabajar duro, ayudar a los demás y poner la pasión por el aprendizaje en el centro de su experiencia educativa.</p>
            <p style={{ fontWeight: 'bold' }}>4 - Disfruta del viaje</p>
            <p style={{ fontWeight: '300' }}>Actualmente, el 80% de los alumnos encuentra trabajo 3 meses después de terminar el bootcamp. Es importante tener en cuenta que esto no implica un compromiso por parte de IronJob, ya que el ratio puede variar en función de los estudiantes y el mercado laboral. Este ratio funciona como una aproximación para futuros bootcamps y alumnos.</p>
            <p style={{ fontWeight: '300' }}>Déjate llevar, aprende todo lo que puedas y disfruta del viaje. Hay cosas que solo se hacen una vez en la vida :)</p>
            <div style={{ textAlign: 'center', marginTop: '50px', marginBottom: '-100px' }}>
            <Link id="rotate" to="/" variant="dark" className="btn btn-dark" style={{marginTop: '91px'}}>Volver a inicio</Link>
                <img style={{marginLeft: '-120px'}} src={christmasImage} alt="Renus logo" />
            </div>
        </Col>
    )
}

export default Post