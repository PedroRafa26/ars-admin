import React from 'react';
// import ReactDOM from 'react-dom';
import './styles/CarsCard.css';
import myImage from '../../assets/images/A80AA0D1.jpg';
import { editCarInfo } from '../../swal/editCarInfo';
import { CarsDetails } from './CarsDetails';
// import Car from './models/Car'

const CarsCard = (props)=>{

  // var obj = {
  //   id: "u21",
  //   marca: "MACK",
  //   modelo: "Machito",
  //   placa: "A80AA0D",
  //   conductor: "Pedro Chacon",
  //   estado: "En Operaciones",
  //   combustible: "full",
  //   kilometraje: "22.000Km",
  //   urlFoto: "none",
  //   ubicacion: "casita",
  //   mantenimiento: "Pendiente",
  // }

  // var prueba1 = new Car.fromJson(obj);


  return (
  <div className="cars-card">
    <div className="cars-avatar">
      <img src={myImage}  alt="Vehiculo"/>
    </div>
    <div className="cars-card-id">
      ID: {"u21"}
      <p>{"MACK"}</p>
      <p>{"A80AA0D"}</p>
    </div>
    <div className="cars-card-status">
      <div className="cars-card-status-mark"/>
      <p>{"En Operaciones"}</p>
    </div>
    <button className="cars-card-access-btn" onClick={()=>createSwal(true)}>
      Ver
    </button>
    <button className="cars-card-access-btn" onClick={()=>createSwal(false)}>
      Editar
    </button>
  </div>
  )
}

export default CarsCard;

function createSwal(edit) {
  console.log("Esta es la funcion");
  debugger;
  editCarInfo(
    <CarsDetails edit={edit}/>
  )
}