import { Parallax } from 'react-parallax'
import { Container, Row, Col } from 'react-bootstrap'
import Post from './Post'
import './Blog.css'

const bgblog = 'https://res-console.cloudinary.com/phector27/thumbnails/transform/v1/image/upload//v1608136637/Y3Ytd2VidWlsZC9waG90by0xNTg2NTY4NzQwODQ4LTkyOWEwNzU4Yjk2NF94YnFtaWg=/drilldown'

const Blog = () => {
    return (
        <section>
            <Container fluid="100vw">
                <Row>
                    <Col>
                        <Parallax
                            percentage={30}
                            bgImage={bgblog}
                            strength={600}>
                            <div className='section2'>
                                <h1 style={{ color: 'white', fontWeight: 'bold' }}>IronBlog</h1>
                                <h2 style={{ color: 'white', fontWeight: '300', textAlign: 'center' }}>Un rincon de expresión</h2>
                            </div>
                            <div style={{ height: 700 }}></div>
                        </Parallax>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Post />
                </Row>
            </Container>
        </section>
    )
}
export default Blog