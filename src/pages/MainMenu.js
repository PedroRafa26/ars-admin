import React from "react";
import MenuColumn from "../components/MenuColumn";
import {ArsUserId} from "../const";
import "./styles/MainMenu.css";
import MainAdmin from "./MainAdmin"

const MainMenu = (props) => {
    let admin;
    console.log(props.user.uid);
    console.log(props.user.uid === ArsUserId);
    admin = props.user.uid === ArsUserId;
    // debugger

    return (
        <div className="mainMenu">
            <h4 className="mainMenu-companyName">Nombre de la empresa</h4>
            {
                admin ?(<MainAdmin />) :(<MenuColumn/>)
            }
        </div>
    );
};

export default MainMenu;
