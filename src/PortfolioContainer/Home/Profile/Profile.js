import React from "react";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.instagram.com/ignacio_isas/?hl=es-la">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://twitter.com/Ignacio_Isas">
                <i className="fa fa-twitter-square"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hola, mi nombre es{" "}
              <span className="highlighted-text">Ignacio</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <div className="i-title-wrapper">
                <div className="i-title-item">Licenciado en Matemáticas</div>
                <div className="i-title-item">Full Stack Delevoper</div>
                <div className="i-title-item">Desarrollador Web</div>
                <div className="i-title-item">Pianista</div>
              </div>
              
            </span>
            <span className="profile-role-tagline">
                "Si quieres progresar, haz que progrese alguien más." - Booker
                T. Washington
              </span>
          </div>
          <div className="profile-options">
            <a href="https://github.com/ignacioisas9">
              <button className="btn primary-btn">
                {""}
                Ve mis proyectos{""}
              </button>
            </a>

            <a
              href="CV - Isas, Miguel Ignacio.pdf"
              download="CV - Isas, Miguel Ignacio.pdf"
            >
              <button className="btn highlighted-btn">Obten mi CV</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
