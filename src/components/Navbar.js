import React, { useEffect } from "react";
import {AuthService} from "../apis/firebaseService"
import "./styles/Navbar.css";

const Navbar = (props) => {

    const logout = async()=>{
        console.log("Inicio del loguot");
        let {error} = await AuthService.signOut()
        console.log(error);
    }

    // useEffect(() => {
    //     AuthService.authPersistence(props.setUser);
    // }, []);

    return (
        <div className="Navbar">
            <div className="titleNavbar">
            ARS Mobile Panel administrativo
            </div>
            <div className="NavbarButton">
                <button onClick={logout}>Cerrar sesión</button>
            </div>
        </div>
    );
};

export default Navbar;
