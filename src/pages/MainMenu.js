import React from "react";
import MenuColumn from "../components/MenuColumn";
import {ArsUserId} from "../const";
import './styles/MainMenu.css'

const MainMenu = ({logout}) => {
    var admin = false;
    // console.log(user.uid);
    // console.log(user.uid === ArsUserId);
    // admin = user.uid === ArsUserId;

    return (
        <div className="mainMenu">
        <h4 className="mainMenu-companyName">Nombre de la empresa</h4>
            <MenuColumn />
        </div>
    );
};

export default MainMenu;
