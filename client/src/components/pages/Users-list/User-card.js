import { Col } from 'react-bootstrap'
import { Button } from 'semantic-ui-react'
import emailLogo from './../../layout/Navigation/images/email.png'
import linkedinImage from './../../layout/Navigation/images/pngegg.png'
import githubLogo from './../../layout/Navigation/images/github_PNG83.png'
import adobeLogo from './../../layout/Navigation/images/pedefe.png'
import WhatsApp from './../../layout/Navigation/images/whatsap1.png'

import './User-Card.css'

const UserCard = ({ username, role, name, email, linkedInProfile, _id, githubProfile, cvitae, phoneNumber, deleteElement, profilePhoto, defineUser }) => {
    return (
        <Col md={4} style={{ paddingBottom: '50px' }}>
            <aside className="profile-card">
                <header>
                    <img src={profilePhoto} alt=""></img>
                    <h1>{name}</h1>
                    <h2>{username}</h2>
                    <h2>{role === 'Guest' ? <p style={{ color: 'red' }}>Invitado</p> : ''}</h2>
                    <h2>{role === 'BUSINESS-RECRUITER' ? <p style={{ color: 'blue' }}>Company</p> : ''}</h2>
                    <h2>{role === 'Student' ? <p style={{ color: 'green' }}>Student</p> : ''}</h2>
                    <h2>{role === 'IRONHACK-RECRUITER' ? <p style={{ color: 'black' }}>ADMIN</p> : ''}</h2>
                    <a href={linkedInProfile} target="_blank" rel="noreferrer">
                        <img
                            alt="Linkedin logo"
                            src={linkedinImage}
                            className="rrss-contact"
                            style={{ borderRadius: '0px', width: '31px' }}
                        />
                    </a>
                    <a href={"mailto:" + email} target="_blank" rel="noreferrer">
                        <img
                            alt="Email logo"
                            src={emailLogo}
                            className="rrss-contact"
                            style={{ borderRadius: '0px', width: '31px' }}
                        />
                    </a>
                    <a href={githubProfile} target="_blank" rel="noreferrer">
                        <img
                            alt="github logo"
                            src={githubLogo}
                            className="rrss-contact"
                            style={{ borderRadius: '0px', width: '30px' }}
                        />
                    </a>
                    <a href={cvitae} target="_blank" rel="noreferrer">
                        <img
                            alt="Adobe logo"
                            src={adobeLogo}
                            className="rrss-contact"
                            style={{ borderRadius: '0px', width: '25px' }}
                        />
                    </a>
                    <a href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=%20Hola!`} target="_blank" rel="noreferrer">
                        <img
                            alt="Adobe logo"
                            src={WhatsApp}
                            className="rrss-contact"
                            style={{ borderRadius: '0px', width: '31px' }}
                        />
                    </a>
                </header>
                <Button className="btn btn-sm btn-block" style={{ marginBottom: '10px' }} onClick={() => deleteElement()}>Eliminar usuario</Button>
                <Button className="btn btn-sm btn-block" style={{ marginBottom: '10px' }} onClick={() => defineUser(_id)}>Editar permisos</Button>
            </aside>
        </Col>
    )
}
export default UserCard