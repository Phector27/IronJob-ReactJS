import React from "react"
import Slider from "react-animated-slider"
import { Link } from 'react-router-dom'
import "react-animated-slider/build/horizontal.css"
import "./slider-animations.css"
import "./styles.css"

const content = [
  {
    title: "Héctor Carramiñana",
    description: "Desarrollador web insaciable, abierto a nuevos retos y rompiendo techos día a día.",
    button: "Volver",
    image: "https://res.cloudinary.com/phector27/image/upload/v1608055411/cv-webuild/slidhector_v6vofa.png",
    userProfile: "https://media-exp1.licdn.com/dms/image/C4D03AQE9uXjTtnhLDQ/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=Mn9jOQrdsbNMHyihJYAhqS95VToo046ZyuD8A6W3STE",
    linkedIn: "https://www.linkedin.com/in/hector-carraminana/"
  },
  {
    title: "José Dorado",
    description: "Desarrollador web con un objetivo y un punto de mira: conseguir lo inalcanzable.",
    button: "Volver",
    image: "https://res.cloudinary.com/phector27/image/upload/v1608063371/cv-webuild/romatrollas0_1_oqumsh.png",
    userProfile: "https://media-exp1.licdn.com/dms/image/C4E03AQGs9z3NriaHGQ/profile-displayphoto-shrink_200_200/0/1605352580962?e=1613001600&v=beta&t=UISOOgK1HXFmrLTQXLOmH7rIY9tly0izdTU5sFHFmVo",
    linkedIn: "https://www.linkedin.com/in/jose-dorado/"
  }
];

const SliderSomos = () => (
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
            <p style={{ fontSize: '1.3rem', fontWeight: '500' }}>{item.description}</p>
            <button><Link to="/" style={{ textDecoration: 'none', color: 'black', textTransform: 'none' }}>{item.button}</Link></button>
          </div>
          <section>
            <a href={item.linkedIn} target="blank"><img src={item.userProfile} alt="" /></a>
            <span>
              <strong>Contratar a {item.title}</strong>
            </span>
          </section>
        </div>
      ))}
    </Slider>
  </div>
);

export default SliderSomos