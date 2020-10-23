import React from "react";
import "./styles/LogbookCard.css";
import Event from "../models/event";
import myImage from "../assets/images/0.jpg";

const LogbookCard = (props) => {
    let events = [
        new Event(
            1,
            "08:30 am",
            "Pedro Rafael Chacon",
            "hola.com",
            "Recibió un cargamento de cemento y lo entregó en el destino correspondiente"
        ),
        new Event(
            2,
            "08:30 am",
            "Pedro Rafael Chacon",
            "hola.com",
            "Recibió un cargamento de cemento y lo entregó en el destino correspondiente"
        ),
        new Event(
            3,
            "08:33 am",
            "Pedro Rafael Chacon",
            "hola.com",
            "Recibió un cargamento de cemento y lo entregó en el destino correspondiente"
        )
    ];

    return (
        <div className="logbook-container">
            <div className="logbook-card-date">26/06/2020</div>
            <div className="logbook-card">
                {events.map((evento, index) => {
                    var style =(index === events.length-1) ? "logbook-card-item" : "logbook-card-item border-bottom"
                    return<div className={style}>
                        <div className="logbook-card-item-section">
                            {evento.date}
                        </div>
                        <div className="logbook-card-item-section">
                            {evento.responsable}
                        </div>
                        <div className="logbook-card-item-section">
                            {evento.description}
                        </div>
                        <div className="logbook-card-item-section">
                            {evento.urlImage}
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
};

export default LogbookCard;
