import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="Navbar-items">
          <Link to="/">Principal</Link>
        </div>
        <div className="Navbar-items">
          <Link to="/add">Agregar</Link>
        </div>
        <div className="Navbar-items">
          <Link to="/edit">Editar</Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
