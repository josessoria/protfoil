import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Particle from "../configs/particle.jsx";
import Flecha from "../minicomponets/flecha";
import $ from "jquery";
import "./projects.scss";
import ScrollToTop from "../configs/test";

function projects() {
  $(".slide-nav").on("click", function (e) {
    e.preventDefault();
    // get current slide
    var current = $(".flex--active").data("slide"),
      // get button data-slide
      next = $(this).data("slide");

    $(".slide-nav").removeClass("active");
    $(this).addClass("active");

    if (current === next) {
      return false;
    } else {
      $(".slider__warpper")
        .find(".flex__container[data-slide=" + next + "]")
        .addClass("flex--preStart");
      $(".flex--active").addClass("animate--end");
      setTimeout(function () {
        $(".flex--preStart")
          .removeClass("animate--start flex--preStart")
          .addClass("flex--active");
        $(".animate--end")
          .addClass("animate--start")
          .removeClass("animate--end flex--active");
      }, 800);
    }
  });
  return (
    <motion.div>
      <ScrollToTop></ScrollToTop>
      <Flecha></Flecha>
      <Particle></Particle>
      <motion.div
        className="slider__warpper"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%", transition: { duration: 0.2 } }}
      >
        <div
          className="flex__container flex--pikachu flex--active"
          data-slide="1"
        >
          <div className="flex__item flex__item--left">
            <div className="flex__content">
              <p className="text--sub">Backend</p>
              <a target="blank_" href="https://mypacient.netlify.app/">
                <h1 className="text--big">MyPacient</h1>
              </a>
              <a target="blank_" href="https://mypacient.netlify.app/">
                <div className="button">View</div>
              </a>
              <p className="text--normal">
                Proyecto orientado a Backend, desarrollé con javascript una base
                de datos desde cero, la cual permite registrar, buscar y
                eliminar pacientes con una interfaz altamente intuitiva.
              </p>
            </div>
            <p className="text__background">MyPacient</p>
          </div>
          <div className="flex__item flex__item--right"></div>
        </div>
        <div
          className="flex__container flex--piplup animate--start"
          data-slide="2"
        >
          <div className="flex__item flex__item--left">
            <div className="flex__content">
              <p className="text--sub">Api Project</p>
              <a target="blank_" href="https://weatherpool.netlify.app/">
                <h1 className="text--big">WeatherPool</h1>
              </a>
              <a target="blank_" href="https://weatherpool.netlify.app/">
                <div className="button">View</div>
              </a>
              <p className="text--normal">
                Aplicación del tiempo realizado con las tecnologias de React,
                Sass, Javascript, HTML, CSS. La cual se encarga de hacer un
                llamado a una API de clima y permite al usuario buscar la
                temperatura en su localidad actual.
              </p>
            </div>
            <p className="text__background">PoolWeather</p>
          </div>
          <div className="flex__item flex__item--right"></div>
        </div>
        <div
          className="flex__container flex--blaziken animate--start"
          data-slide="3"
        >
          <div className="flex__item flex__item--left">
            <div className="flex__content">
              <p className="text--sub">Bussines Page</p>
              <a target="blank_" href="https://elelectricista.netlify.app/">
                <h1 className="text--big">Electricista</h1>
              </a>
              <a target="blank_" href="https://elelectricista.netlify.app/">
                <div className="button">View</div>
              </a>
              <p className="text--normal">
                Web Desarollada para un local comercial, desarrollado con
                JavaScript, html y css, que contienendo formularios de contacto,
                catalogo y Scripts
              </p>
            </div>
            <p className="text__background">Electricista</p>
          </div>
          <div className="flex__item flex__item--right"></div>
        </div>
        <div
          className="flex__container flex--dialga animate--start"
          data-slide="4"
        >
          <div className="flex__item flex__item--left">
            <div className="flex__content">
              <a href="https://turistargg.netlify.app/" target="_blank" rel="noopener noreferrer"><p className="text--sub">Turism Web site</p></a>
              <a target="blank_" href="https://elelectricista.netlify.app/">
                <h1 className="text--big">TuristArg</h1>
              </a>
              <a target="blank_" href="https://turistargg.netlify.app/">
                <div className="button">View</div>
              </a>
              <p className="text--normal">
                Desarrollo en equipo en forma de Scrum, este sitio web fue
                destinado a una pagina de turismo, utiliza tecnologías como
                HTML, CSS y Bootstrap
              </p>
            </div>
            <p className="text__background">TuristARG</p>
          </div>
          <div className="flex__item flex__item--right"></div>
        </div>
        <div
          className="flex__container flex--zekrom animate--start"
          data-slide="5"
        >
          <div className="flex__item flex__item--left">
            <div className="flex__content">
              <p className="text--sub">This Portfoil</p>
              <a
                href="http://josesoria.com.ar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1 className="text--big">Portfoil</h1>
              </a>
              <p className="text--normal">
                Este portafolio se encuenta desarrollado con Javascript, React,
                Sass, Html, css y multiples frameworks
              </p>
            </div>
            <p className="text__background">Portfoil</p>
          </div>
          <div className="flex__item flex__item--right"></div>
        </div>
      </motion.div>

      <div className="slider__navi">
        <Link to="#" className="slide-nav active" data-slide="1">
          pikachu
        </Link>
        <Link to="#" className="slide-nav" data-slide="2"></Link>
        <Link to="#" className="slide-nav" data-slide="3"></Link>
        <Link to="#" className="slide-nav" data-slide="4"></Link>
        <Link to="#" className="slide-nav" data-slide="5"></Link>
      </div>
    </motion.div>
  );
}

export default projects;
