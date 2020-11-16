import React from "react";
import "./styles/MainAdmin.css";
import {AuthService} from "../apis/firebaseService"


const MainAdmin = () => {
    var empresaSelected;
    var empresas = ["Sermapaca C.A.", "Serdisur C.A.", "AR Servicios C.A."];

    var construccion = () => {
        console.log("seccion en construcción");
        alert("seccion en Construcción")
    };

    //TODO: Manejar el navegar enviando el uid
    var navigate = (index) => {
        empresaSelected = empresas[index];
        console.log(empresaSelected);
    };

    return (
        <div className="container">
            <div className="title">
                Bienvenido al panel administrativo de ARS Mobile
            </div>
            <div className="selection">
                <div className="subtitle">Selecciona una Empresa</div>
                <div className="selection-list">
                    {empresas.map((item, index) => {
                        var parimpar;
                        parimpar = index % 2 === 0 ? "par" : "impar";
                        return (
                            <div
                                className={"selection-item " + parimpar}
                                onClick={navigate(index)}
                            >
                                {item}
                            </div>
                        );
                    })}
                </div>
                <div>
                    <button className="btn-add" onClick={construccion}>
                        Nueva Empresa
                    </button>
                </div>
            </div>
            <div className="logo"></div>
        </div>
    );
};

export default MainAdmin;
