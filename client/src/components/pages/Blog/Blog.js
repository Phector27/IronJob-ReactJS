import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Blog = () => {
    
    return (
        <Container style={{ marginTop: '150px', marginBottom: '100px' }}>
            
            <h5 style={{ textAlign: 'center' }}>Esta es la zona donde podrás obtener respuesta a las preguntas frecuentes de nuestr@s empresas y alumn@s.</h5>
            <hr /><br />
            <p><strong>¿Quiénes son los #IronJobers?</strong></p>
            <p>IronJobers es nuestra comunidad de ex alumnos, maestros y mentores. Nuestra relación no termina una vez que el curso ha terminado. Una vez que te conviertes en un IronJober, ¡Siempre un IronJober!.</p>
            <p><strong>¿IronJob garantiza un puesto de trabajo?</strong></p>
            <p>No, en ningún caso ¿IronJob puede garantizar un puesto de trabajo. Si el estudiante cumple con los criterios establecidos en el contrato, ¿IronJob se compromete a darle apoyo y orientación en su búsqueda laboral. Garantizar un puesto de trabajo es algo que no está en mano de la escuela sino que depende de la empresa y el alumno.</p>
            <p><strong>¿Qué busca IronJob en sus alumnos?</strong></p>
            <p>Nuestros valores (o Ironvalues) son: pasión por encima de todo, amar a las personas y sus historias y can-do attitude. Buscamos estudiantes que estén dispuestos a trabajar duro, ayudar a los demás y poner la pasión por el aprendizaje en el centro de su experiencia educativa.</p>
            <p><strong>¿Cuál es el ratio de inserción laboral de los alumnos de IronJob?</strong></p>
            <p>Actualmente, el 80% de los alumnos encuentra trabajo 3 meses después de terminar el bootcamp. Es importante tener en cuenta que esto no implica un compromiso por parte de IronJob, ya que el ratio puede variar en función de los estudiantes y el mercado laboral. Este ratio funciona como una aproximación para futuros bootcamps y alumnos.</p>
            <div style={{textAlign: 'center'}}>
            <Link to="/" variant="dark" className="btn btn-dark" style={{marginTop: '25px'}}>Volver a inicio</Link>
            </div>
        </Container >
    )
}

export default Blog