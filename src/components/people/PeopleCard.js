import React from "react";
import "./styles/PeopleCard.css";
import myImage from "../../assets/images/0.jpg";

const PeopleCard = (props) => {
    return (
        <div className="people-card">
            <div className="people-card-status">
                <p>En Oficina</p>
                <div className="people-card-status-avatar">
                    <img src={myImage} />
                </div>
            </div>
            <div className="people-card-id">
                <h5>Pedro Rafael Chacon Acuña</h5>
                <h6>Gerente de almacén</h6>
            </div>
            <div className="people-card-bottom">
                <div className="people-card-bottom-hours">
                    <p>Entrada: 8:00 am</p>
                    <p>Salida: 5:00 pm</p>
                </div>
                <button className="people-card-acces-btn">Ver</button>
            </div>
        </div>
    );
};

export default PeopleCard;
