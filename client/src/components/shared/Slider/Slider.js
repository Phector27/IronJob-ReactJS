import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./slider-animations.css";
import "./styles.css";

const content = [
  {
    title: "UN MAR LLENO DE TALENTO",
    description:
      "La plataforma perfecta para acceder al mejor talento tecnologico nacional",
    button: "Conoce más",
    image: "https://res.cloudinary.com/phector27/image/upload/v1608028910/cv-webuild/Slide1_sukcf2.jpg",
    user: "José Dorado",
    userProfile: "https://media-exp1.licdn.com/dms/image/C4E03AQGs9z3NriaHGQ/profile-displayphoto-shrink_200_200/0/1605352580962?e=1613001600&v=beta&t=UISOOgK1HXFmrLTQXLOmH7rIY9tly0izdTU5sFHFmVo",
    linkedIn: "https://www.linkedin.com/in/jose-dorado/"
  },
  {
    title: "IRONJOB, TU MEJOR ESCAPARATE",
    description: "El punto de inicio de tu futuro",
    button: "Conoce más",
    image: "https://res.cloudinary.com/phector27/image/upload/v1608028953/cv-webuild/Slide2_pg5ae0.jpg",
    user: "Héctor Carramiñana",
    userProfile: "https://media-exp1.licdn.com/dms/image/C4D03AQE9uXjTtnhLDQ/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=Mn9jOQrdsbNMHyihJYAhqS95VToo046ZyuD8A6W3STE",
    linkedIn: "https://www.linkedin.com/in/hector-carraminana/"
  },
  {
    title: "DESARROLLAMOS PARA TI",
    description: "Sin límites. Tú marcas el ritmo.",
    button: "Conoce más",
    image: "https://res.cloudinary.com/phector27/image/upload/v1608028984/cv-webuild/Slide3_fiqhgk.jpg",
    user: "Visita nuestro anterior proyecto",
    userProfile: "https://linuxforallsite.files.wordpress.com/2018/06/github-mark.png",
    linkedIn: "https://github.com/Phector27/IronJob"
  }
];

const Slider1 = () => (
  <div id="slider">
    <Slider className="slider-wrapper">
      {content.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ background: `url('${item.image}') no-repeat center center` }}
        >
          <div className="inner">
            <h1 style={{ fontWeight: '400' }}>{item.title}</h1>
            <p style={{ fontSize: '1.3rem' }}>{item.description}</p>
            <button><a href="#conocenos" style={{ textDecoration: 'none', color: 'black', textTransform: 'none' }}>{item.button}</a></button>
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