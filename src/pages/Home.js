import React, { Component } from 'react';
import SearchBarComponent from '../components/molecules/SearchBar';
import PeopleCardComponent from '../components/molecules/PeopleCard';

class HomePageComponent extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <SearchBarComponent />
          <PeopleCardComponent />
        </div>
      </section>
    );
  }
}

export default HomePageComponent;
