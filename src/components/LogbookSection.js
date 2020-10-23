import React, {useState, useEffect} from "react";
import "./styles/LogbookSection.css";
import LogbookCard from "./LogbookCard";

function LogbookSection() {
    let areas = [
        "ALMACÉN",
        "TALLER",
        "COMEDOR",
        "ADMINISTRACIÓN",
        "ESTACIONAMIENTO",
        "PORTÓN",
        "OTRO"
    ];
    const initStyles = [];
    areas.map(() => {
        initStyles.push("logbookSection-selector-item none-selected");
    });

    console.log(initStyles);

    const [styles, setStyles] = useState(initStyles);
    console.log(styles);

    const handleSelector = (select) => {
        var stylesUpdated = [];
        var style = "";
        styles.forEach((value, index) => {
            console.log(index);
            style =
                index === select
                    ? "logbookSection-selector-item selected"
                    : "logbookSection-selector-item none-selected";
            stylesUpdated.push(style);
        });
        setStyles(stylesUpdated);
    };

    return (
        <div className="logbookSection">
            <div className="logbookSection-selector">
                {areas.map((item, index) => (
                    <div
                        className={
                            index === 0
                                ? styles[index] + " first"
                                : index === areas.length - 1
                                ? styles[index] + " last"
                                : styles[index]
                        }
                        // onClick={handleSelector(index)}
                        onClick={() => handleSelector(index)}
                    >
                        <p>{item}</p>
                    </div>
                ))}
            </div>
            <div className="logbookSection-header">
                <div>Hora</div>
                <div>Responsable</div>
                <div>Descripción</div>
                <div>Imágen</div>
            </div>
            <div className="logbookSection-body">
                <LogbookCard />
                <LogbookCard />
                <LogbookCard />
            </div>
        </div>
    );
}

export default LogbookSection;
