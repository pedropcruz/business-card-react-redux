import React, { Component } from 'react';

import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestData } from '../actions';

import SearchBarComponent from '../components/molecules/SearchBar';
import PeopleCardComponent from '../components/molecules/PeopleCard';
import Loading from '../components/molecules/Loading';

class HomePageComponent extends Component {
  componentDidMount() {
    this.props.requestData();
  }

  person = (person) => {
    return <PeopleCardComponent person={person} key={person.id} />;
  };

  render() {
    const { filtered = [], fetching } = this.props.data;

    const LoadingOrFallback = fetching ? (
      <Loading fetching={fetching} />
    ) : !filtered.length ? (
      <h1 className="error">Nothing matched to your</h1>
    ) : null;

    return (
      <section className="section">
        <div className="container">
          <SearchBarComponent />

          {filtered.length ? (
            <div className="columns is-multiline is-vcentered">
              {filtered.map(this.person)}
            </div>
          ) : (
            LoadingOrFallback
          )}
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ requestData }, dispatch);

HomePageComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageComponent);

export default compose()(HomePageComponent);
