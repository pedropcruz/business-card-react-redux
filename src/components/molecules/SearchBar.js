import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search } from '../../actions';
import { bindActionCreators } from 'redux';

class SearchBarComponent extends Component {
  onInputChange = (e) => {
    this.props.search({ query: e.target.value });
  };

  render() {
    const { query } = this.props;
    return (
      <div className="control">
        <input
          className="input"
          type="text"
          placeholder="Search for a Person"
          value={query}
          onChange={this.onInputChange}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ search }, dispatch);

export default connect(null, mapDispatchToProps)(SearchBarComponent);
