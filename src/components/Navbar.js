import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {AuthService} from "../apis/firebaseService"
import "./styles/Navbar.css";
import UserContext from '../context/UserContext'
import UserAuthContext from '../context/UserAuthContext'
import {ArsUserId} from '../const'

const Navbar = () => {
    let history = useHistory()
    const {userContextValue, setUserContextValue} = useContext(UserContext)
    const {contextUser} = useContext(UserAuthContext)
    console.log(contextUser);

    const logout = async()=>{
        console.log("Inicio del loguot");
        let {error} = await AuthService.signOut()
        history.push('/')
        console.log(error);
    }
    console.log(userContextValue);

    function handleBack(){
      setUserContextValue({
        uid: "",
        companyName: "",
        companeyLogoUrl: ""
      })
      history.goBack()
    }

    useEffect(() => {
      console.log("Navbar Update")
    }, [contextUser])

    return (
        <div className="Navbar">
            {contextUser && contextUser.uid === ArsUserId ? <span onClick={handleBack}>Volver</span> :null }
            <div className="titleNavbar">
            ARS Mobile Panel administrativo
            </div>
            {userContextValue.companyName && <div className="Navbar_companyName">{userContextValue.companyName}</div> }
            <div className="NavbarButton">
                <button onClick={logout}>Cerrar sesión</button>
            </div>
        </div>
    );
};

export default Navbar;
