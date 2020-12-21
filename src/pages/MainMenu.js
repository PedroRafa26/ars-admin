import React, { useEffect } from "react";
import MenuColumn from "../components/MenuColumn";
import { ArsUserId } from "../const";
import "./styles/MainMenu.css";
import MainAdmin from "./MainAdmin";
import { useHistory } from "react-router-dom";
import Layout from "../components/Layout";


const MainMenu = props => {
	let admin;
	// console.log(props.user.uid);
	// debugger

	return (
		<div className="mainMenu">
			{/* <h4 className="mainMenu-companyName">Nombre de la empresa</h4> */}
			{/* {admin ? <MainAdmin /> : <MenuColumn />} */}
			<Layout>
				<MenuColumn />
			</Layout>
			{/* <MainAdmin/> */}
		</div>
	);
};

export default React.memo(MainMenu);
