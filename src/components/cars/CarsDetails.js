import React from "react";
import "./styles/CarsDetails.css";

export const CarsDetails = (props) => {

    console.log(props.edit);

    return (
        <div className="cars-details-container">
            <h3>Editando Vehiculo</h3>
            <br />
            <div>
                <label className="cars-details-container-staticInfo">
                    Id: U21
                    <br />
                    Marca: Mack
                    <br />
                    Modelo: Granite
                    <br />
                    Placa: A80AA0D
                    <br />
                </label>
            </div>
            <div className="cars-details-editableInfo">
                <br />
                <div className="cars-details-editableInfo-item">
                    <div className="editable-title">Estatus: </div>
                    <div className="editable-selection">
                        <select id="selectStatus" disabled ={props.edit}>
                            <option value="A">EN OPERACIONES</option>
                            <option value="B">EN PATIO</option>
                            <option value="C">EN MANTENIMIENTO</option>
                        </select>
                    </div>
                </div>
                <br />
                <div className="cars-details-editableInfo-item">
                    <div className="editable-title">Conductor:</div>
                    <div className="editable-selection">
                        <input type="text" name="conductor" disabled ={props.edit}/>
                    </div>
                </div>

                <br />
                <div className="cars-details-editableInfo-item">
                    <div className="editable-title">Combustible:</div>
                    <div className="editable-selection">
                        <input type="text" name="combustible" disabled ={props.edit}/>
                    </div>
                </div>

                <br />
                <div className="cars-details-container-kilometraje">
                    <div className="kilometrosTitle">Kilometraje:</div>
                    <div className="kilometros">
                        <input
                            type="number"
                            name="kilometraje"
                            className="input"
                            placeholder="100.000"
                            disabled ={props.edit}
                        />
                        Km
                        <input
                            type="number"
                            name="kilometraje"
                            className="input"
                            disabled ={props.edit}
                        />
                        Km
                        <input
                            type="number"
                            name="kilometraje"
                            className="input"
                            disabled ={props.edit}
                        />
                        Km
                    </div>
                </div>
                {/*
                <div className="cars-details-container-buttonSection">
                    <button onClick={createSwalConstruccion} className="cars-details-container-mantenimientoButton">
                        Mantenimiento
                    </button>
                    <button onClick={createSwalConstruccion} className="cars-details-container-ubicacionButton">
                        Ubicación
                    </button>
                </div> */}

                <br />
            </div>
        </div>
    );
};
