import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import CarsSection from "./cars/CarsSection";
import LogbookSection from "./logbook/LogbookSection";
import PeopleSection from "./people/PeopleSection";
import "./styles/MenuColumn.css";

const MenuColumn = () => {
	const [carStyle, setCarStyle] = useState("none");
	const [peopleStyle, setPeopleStyle] = useState("none");
	const [logbookStyle, setLogbookStyle] = useState("none");
	const [assetsStyle, setAssetsStyle] = useState("none");

	function handleSelection(selection) {
		switch (selection) {
			case "car":
				setCarStyle(() => "focus");
				setPeopleStyle(() => "away");
				setLogbookStyle(() => "farAway");
				setAssetsStyle(() => "farFarAway");
				break;
			case "people":
				setCarStyle(() => "away");
				setPeopleStyle(() => "focus");
				setLogbookStyle(() => "away");
				setAssetsStyle(() => "farAway");
				break;
			case "logbook":
				setCarStyle(() => "farAway");
				setPeopleStyle(() => "away");
				setLogbookStyle(() => "focus");
				setAssetsStyle(() => "away");
				break;
			case "assets":
				setCarStyle(() => "farFarway");
				setPeopleStyle(() => "farAway");
				setLogbookStyle(() => "away");
				setAssetsStyle(() => "focus");
				break;
			default:
				break;
		}
	}

	const history = useHistory();

	function handleAdd(type) {
    history.push('/cars-add')
  }


	return (
		<div className="Menu-Container">
			<div
				className={"column cars " + carStyle}
				onClick={()=>handleSelection("car")}
			>
				{carStyle === "focus" ? (
					<>
						<CarsSection />
						<span className="material-icons" onClick={handleAdd}>
							add
						</span>
					</>
				) : (
					<h4>Vehiculos </h4>
				)}
			</div>
			<div
				className={"column people " + peopleStyle}
				onClick={()=>handleSelection("people")}
			>
				{peopleStyle === "focus" ? <PeopleSection /> : <h4>Personas</h4>}
			</div>
			<div
				className={"column logbook " + logbookStyle}
				onClick={()=>handleSelection("logbook")}
			>
				{logbookStyle === "focus" ? <LogbookSection /> : <h4>Bitácora</h4>}
			</div>
			<div
				className={"column assets " + assetsStyle}
				onClick={()=>handleSelection("assets")}
			>
				Activos
			</div>
		</div>
	);
};

export default MenuColumn;
