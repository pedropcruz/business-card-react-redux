import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchBarComponent extends Component {
  state = {
    query: '',
  };

  onInputChange = (e) => {
    this.setState({
      query: e.target.value,
    });
  };

  render() {
    return (
      <div className="control">
        <input
          className="input"
          type="text"
          placeholder="Search for a Person"
          value={this.state.query}
          onChange={this.onInputChange}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  query: state.query,
  persons: state.persons,
});

SearchBarComponent = connect(mapStateToProps, null)(SearchBarComponent);

export default SearchBarComponent;
