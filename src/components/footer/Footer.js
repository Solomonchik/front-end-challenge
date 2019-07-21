import React, { Component } from "react";
import {NavLink} from "reactstrap";

class Footer extends Component {
  render() {
    return (
      <div className="container">
        <div className={'footerContent'}>
          <NavLink href={'#'}>
            <h5>©2018 Daimler Vans</h5>
          </NavLink>
          <NavLink href={'#'}>
            <h5>Datenschutz</h5>
          </NavLink>
          <NavLink href={'#'}>
            <h5>Rechtliche Hinweise</h5>
          </NavLink>
          <NavLink href={'#'}>
            <h5>Impressum</h5>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Footer;
