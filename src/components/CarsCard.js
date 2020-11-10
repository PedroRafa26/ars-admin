import React from 'react';
import './styles/CarsCard.css';
import myImage from '../assets/images/A80AA0D1.jpg';

const CarsCard = (props)=>{

  return (
  <div className="cars-card">
    <div className="cars-avatar">
      <img src={myImage} />
    </div>
    <div className="cars-card-id">
      ID: U21
      <p>Mack</p>
      <p>A80AA0D</p>
    </div>
    <div className="cars-card-status">
      <div className="cars-card-status-mark"/>
      <p>En operaciones</p>
    </div>
    <button className="cars-card-acces-btn">
      Ver
    </button>
  </div>
  )
}

export default CarsCard;