import React, { useContext } from "react";
import MenuColumn from "../components/MenuColumn";
import "./styles/MainMenu.css";
import Layout from "../components/Layout";


const MainMenu = (props) => {

	return (
		<div className="mainMenu">
			<Layout>
				<MenuColumn />
			</Layout>
		</div>
	);
};

export default React.memo(MainMenu);
