import React from "react";
import CarsSection from "./CarsSection";
import LogbookSection from "./LogbookSection";
import PeopleSection from "./PeopleSection";
import "./styles/MenuColumn.css";

class MenuColumn extends React.Component {
    constructor() {
        super();
        this.state = {
            carStyle: "none",
            peopleStyle: "none",
            logbookStyle: "none",
            assetsStyle: "none"
        };
    }

    carsSection() {
        this.setState({
            carStyle: "focus",
            peopleStyle: "away",
            logbookStyle: "farAway",
            assetsStyle: "farFarAway"
        });
    }

    peopleSection() {
        this.setState({
            carStyle: "away",
            peopleStyle: "focus",
            logbookStyle: "away",
            assetsStyle: "farAway"
        });
    }

    logbookSection() {
        this.setState({
            carStyle: "farAway",
            peopleStyle: "away",
            logbookStyle: "focus",
            assetsStyle: "away"
        });
    }

    assetsSection() {
        this.setState({
            carStyle: "farFarAway",
            peopleStyle: "farAway",
            logbookStyle: "away",
            assetsStyle: "focus"
        });
    }

    render() {
        let carStyle = this.state.carStyle;
        let peopleStyle = this.state.peopleStyle;
        let logbookStyle = this.state.logbookStyle;
        let assetsStyle = this.state.assetsStyle;
        return (
            <div className="Menu-Container">
                <div
                    className={"column cars " + carStyle}
                    onClick={this.carsSection.bind(this)}
                >
                    {carStyle === "focus" ? (
                        <CarsSection />
                    ) : (
                        <h4>Vehiculos </h4>
                    )}
                </div>
                <div
                    className={"column people " + peopleStyle}
                    onClick={this.peopleSection.bind(this)}
                >
                    {peopleStyle === "focus" ? (
                        <PeopleSection />
                    ) : (
                        <h4>Personas</h4>
                    )}
                </div>
                <div
                    className={"column logbook " + logbookStyle}
                    onClick={this.logbookSection.bind(this)}
                >
                    {logbookStyle === "focus" ? (
                        <LogbookSection />
                    ) : (
                        <h4>Bitácora</h4>
                    )}
                </div>
                <div
                    className={"column assets " + assetsStyle}
                    onClick={this.assetsSection.bind(this)}
                >
                    Activos
                </div>
            </div>
        );
    }
}

export default MenuColumn;
