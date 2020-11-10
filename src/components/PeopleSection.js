import React from 'react';
import './styles/PeopleSection.css'
import PeopleCard from './PeopleCard';

class PeopleSection extends React.Component{


  render() {
    return (
      <div className="peopleSection">
        <PeopleCard/>
        <PeopleCard/>
        <PeopleCard/>
        <PeopleCard/>
        <PeopleCard/>
        <PeopleCard/>
        <PeopleCard/>
        <PeopleCard/>
        <PeopleCard/>
      </div>
    )
  }
}

export default PeopleSection