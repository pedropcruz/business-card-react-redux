import React, { Component } from 'react';

import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestData, receiveData, search } from '../actions';

import SearchBarComponent from '../components/molecules/SearchBar';
import PeopleCardComponent from '../components/molecules/PeopleCard';
import Loading from '../components/molecules/Loading';

class HomePageComponent extends Component {
  componentDidMount() {
    this.props.requestData();
  }

  person = (person) => {
    return <PeopleCardComponent person={person} />;
  };

  render() {
    console.log(this.props.data);
    const { fetching, persons = [] } = this.props.data;
    return (
      <section className="section">
        <div className="container">
          <SearchBarComponent />
          <Loading fetching={fetching} />
          {persons.length ? (
            <div class="columns is-multiline is-vcentered">
              {persons.map(this.person)}
            </div>
          ) : (
            <Loading fetching={fetching} />
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
