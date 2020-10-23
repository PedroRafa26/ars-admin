import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Navbar.css'

class Navbar extends React.Component{
    render() {
        return (
            <div className="Navbar">
                <div className="Navbar-items">
                    <Link to="/" >
                        Principal
                    </Link>
                    <Link to="/add" >
                        Agregar
                    </Link>
                    <Link to="/edit" >
                        Editar
                    </Link>
                </div>
                <div className="title">ARS Mobile Panel administrativo</div>
            </div>
        )
    }
}

export default Navbar