import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./slider-animations.css";
import "./styles.css";

const content = [
  {
    title: "VER QUE TITULO PONEMOS AQUÍ SLIDER 1-",
    description:
      "Tenemos que añadir una descripción aquí.",
    button: "VER QUE PONEMOS",
    image: "https://images.unsplash.com/photo-1536940135352-b4b3875df888?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    user: "José Dorado",
    userProfile: "https://i.imgur.com/JSW6mEk.png",
    linkedIn: "https://www.linkedin.com/in/jose-dorado/"
  },
  {
    title: "VER QUE TITULO PONEMOS AQUÍ SLIDER 2-",
    description: "Tenemos que añadir una descripción aquí.",
    button: "VER QUE PONEMOS",
    image: "https://images.unsplash.com/photo-1504717052790-edee6b85829b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1974&q=80",
    user: "Héctor Carramiñana",
    userProfile: "https://media-exp1.licdn.com/dms/image/C4D03AQE9uXjTtnhLDQ/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=Mn9jOQrdsbNMHyihJYAhqS95VToo046ZyuD8A6W3STE",
    linkedIn: "https://www.linkedin.com/in/h%C3%A9ctorcarrami%C3%B1ana/"
  },
  //{
  //   title: "VER QUE TITULO PONEMOS AQUÍ SLIDER 3-",
  //   description:"Tenemos que añadir una descripción aquí.",
  //   button: "VER QUE PONEMOS",
  //   image: "https://images.unsplash.com/photo-1590658094082-88f4c5814ea1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
  //   user: "P.M.D.D.",
  //   userProfile: "https://i.imgur.com/4KeKvtH.png",
  //   linkedIn: "https://www.linkedin.com/"
  // }
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
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <button>{item.button}</button>
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