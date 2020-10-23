import React from 'react';
import './styles/CarsSection.css'
import CarsCard from './CarsCard';

class CarsSection extends React.Component{


  render() {
    return (
      <div className="carsSection">
        <CarsCard/>
        <CarsCard/>
        <CarsCard/>
        <CarsCard/>
        <CarsCard/>
        <CarsCard/>
        <CarsCard/><CarsCard/>
        <CarsCard/>
        <CarsCard/>
        <CarsCard/>
        <CarsCard/>
        <CarsCard/>
        <CarsCard/>
      </div>
    )
  }
}

export default CarsSection