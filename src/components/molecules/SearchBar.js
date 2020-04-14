import React, { Component } from 'react';

export default class SearchBarComponent extends Component {
  render() {
    return (
      <div className="control">
        <input
          className="input"
          type="text"
          placeholder="Search for a Person"
        />
      </div>
    );
  }
}
