import React from "react";
import { Linkedin } from "react-bootstrap-icons";

import "./FooterTemplate.css";

export const FooterTemplate = () => {
  return (
    <footer className="text-center text-lg-start bg-dark">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-12 col-md-12 mb-4 mb-md-0 d-flex flex-column align-items-center" >
            <h5 className="text-uppercase">CONTACT ME</h5>
            <ul className="list-unstyled mb-0 d-flex justify-content-between flex-wrap w-100">
              <li className="d-flex ">
              <p className="text-white me-3">Ramón Folguera</p>

                <a
                  className="text-white"
                  href="https://www.linkedin.com/in/ram%C3%B3n-folguera-0ab32776/"
                >
                  <Linkedin />
                </a>
              </li>
              <li>
                <p className="text-white">+34 633 95 54 87</p>
              </li>
              <li>
                <p className="text-white">folguera.ramon@gmail.com</p>
              </li>
              <li>
                <p className="text-white">Valencia, Spain</p>
              </li>
      

            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};
