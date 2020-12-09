import React from "react";
import Slider from "react-animated-slider";
import {Link} from 'react-router-dom'
import "react-animated-slider/build/horizontal.css";
import "./slider-animations.css";
import "./styles.css";

const content = [
  {
    title: "UN MAR LLENO DE TALENTO",
    description:
      "La plataforma perfecta para acceder al mejor talento tecnologico nacional",
    button: "Conoce más",
    image: "https://images.unsplash.com/photo-1536940135352-b4b3875df888?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    user: "José Dorado",
    userProfile: "https://media-exp1.licdn.com/dms/image/C4E03AQGs9z3NriaHGQ/profile-displayphoto-shrink_200_200/0/1605352580962?e=1613001600&v=beta&t=UISOOgK1HXFmrLTQXLOmH7rIY9tly0izdTU5sFHFmVo",
    linkedIn: "https://www.linkedin.com/in/jose-dorado/"
  },
  {
    title: "IRONJOB, TU MEJOR ESCAPARATE",
    description: "El punto de inicio de tu futuro",
    button: "Conoce más",
    image: "https://images.unsplash.com/photo-1504717052790-edee6b85829b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1974&q=80",
    user: "Héctor Carramiñana",
    userProfile: "https://media-exp1.licdn.com/dms/image/C4D03AQE9uXjTtnhLDQ/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=Mn9jOQrdsbNMHyihJYAhqS95VToo046ZyuD8A6W3STE",
    linkedIn: "https://www.linkedin.com/in/hector-carraminana/"
  },
  {
    title: "DESARROLLAMOS PARA TI",
    description:"Sin límites. Tú marcas el ritmo.",
    button: "Conoce más",
    image: "https://images.unsplash.com/photo-1590658094082-88f4c5814ea1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
    user: "Visita nuestro anterior proyecto",
    userProfile: "https://linuxforallsite.files.wordpress.com/2018/06/github-mark.png",
    linkedIn: "https://github.com/Phector27/IronJob"
  }
];

const Slider1 = () => (
  <div>
    <Slider className="slider-wrapper">
      {content.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ background: `url('${item.image}') no-repeat center center` }}
        >
          <div className="inner">
            <h1 style={{fontWeight: '400'}}>{item.title}</h1>
            <p style={{fontSize: '1.3rem'}}>{item.description}</p>
            <button><Link to="/" style={{textDecoration: 'none', color: 'black', textTransform: 'none'}}>{item.button}</Link></button>
          </div>
        
        <section>
            <a href={item.linkedIn} target="blank"><img src={item.userProfile} alt={item.user} /></a>
            <span>
              Desarrollado por <strong>{item.user}</strong>
            </span>
          </section>
          </div>
      ))}
    </Slider>
  </div>
);

export default Slider1