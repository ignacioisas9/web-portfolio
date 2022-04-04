import React from "react";
import "./About.css";
import aboutMePic from "../../assets/Home/aboutme.jpg";
import htmlCssJs from "../../assets/Home/html-css-js.jpg";
import python from "../../assets/Home/python.jpg";
import ruby from "../../assets/Home/ruby.jpg";
import java from "../../assets/Home/java.jpg";
import R from "../../assets/Home/R.jpg";
import matlab from "../../assets/Home/matlab.jpg";
import sql from "../../assets/Home/sql.jpg";
import react from "../../assets/Home/react.jpg";
import nodejs from "../../assets/Home/nodejs.jpg";
import mysql from "../../assets/Home/mysql.jpg";
import bootstrap from "../../assets/Home/bootstrap.jpg";
import github from "../../assets/Home/github.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={aboutMePic}
            alt="no internet connection"
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Sobre mí</h1>
        <p className="a-sub">
          Soy un joven entusiasta en los aspectos que me propongo. Las
          matemáticas han sido una base fundamental en mi vida a lo largo de
          estos años, me ha ayudado en la dinámica de los problemas que se me
          han presentado día a día. Y la programación no es ajena a esta
          costumbre.
          <br/>
          <br/>
          Lorem ipsum dolor sit amet. Id unde repudiandae aut
          voluptatem ullam id dolorem ducimus est omnis fugit sed nihil sunt sit
          architecto dolor est excepturi ullam! Ex enim internos et reiciendis
          assumenda aut pariatur debitis est internos accusamus vel repudiandae
          nihil aut ullam officiis! Et culpa assumenda et nulla sequi ad
          internos amet qui culpa quia.
        </p>
        <p className="a-skills">
          Lenguajes de programacíon: Python, Ruby, R, Java, Matlab, HTML, CSS,
          Javascript, SQL.
          <br/>
          Herramientas aprendidas: React, node.js, mySQL,
          Bootstrap, GitHub.
        </p>
        <div className="a-awards">
            <img src={python} alt="python logo" className="a-award-img"/>
            <img src={ruby} alt="ruby logo" className="a-award-img"/>
            <img src={R} alt="R logo" className="a-award-img"/>
            <img src={java} alt="java logo" className="a-award-img"/>
            <img src={matlab} alt="matlab logo" className="a-award-img"/>
            <img src={htmlCssJs} alt="html-css-js logo" className="a-award-img"/>
            <img src={sql} alt="sql logo" className="a-award-img"/>
            <br/>
            <img src={react} alt="react logo" className="a-award-img"/>
            <img src={nodejs} alt="nodejs logo" className="a-award-img"/>
            <img src={mysql} alt="mysql logo" className="a-award-img"/>
            <img src={bootstrap} alt="bootstrap logo" className="a-award-img"/>
            <img src={github} alt="github logo" className="a-award-img"/>
        </div>
      </div>
    </div>
  );
};

export default About;
