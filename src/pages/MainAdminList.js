import React from "react";
import "./styles/MainAdmin.css";

const MainAdminListItem = ({name, parimpar}) => {
	let empresaSelected;

	//TODO: Manejar el navegar enviando el uid
	let navigate = item => {
		empresaSelected = item;
		console.log(empresaSelected);
	};

	// debugger;

	return (
		<div
			className={"MainAdmin-selection-item " + parimpar}
			onClick={() => navigate(name)}
		>
			{name}
		</div>
	);
};

export default React.memo(MainAdminListItem);
