import React, {useContext} from "react";
import { useHistory } from "react-router-dom";
import UserContext from '../context/UserContext'
import "./styles/MainAdmin.css";

const MainAdminListItem = ({name, parimpar, uid}) => {

	const history = useHistory();
	const {userContextValue, setUserContextValue} = useContext(UserContext)

	//TODO: Manejar el navegar enviando el uid
	let navigate = () => {
		setUserContextValue({
			uid: uid,
   	  companyName: name,
    	companeyLogoUrl: ""
		});
		history.push(`/menu/${uid}`)
	};

	// debugger;

	return (
		<div
			className={"MainAdmin-selection-item " + parimpar}
			onClick={() => navigate()}
		>
			{name}
		</div>
	);
};

export default React.memo(MainAdminListItem);
