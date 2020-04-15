/* eslint-disable jsx-a11y/accessible-emoji */
// Disabling emoji used on footer

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
      <div className="notification is-danger">
        <h1>User not found</h1>
      </div>
    ) : null;

    return (
      <section className="section">
        <div className="container">
          <p class="title is-1">Business Cards App</p>
          <SearchBarComponent />

          {filtered.length ? (
            <div className="cards columns is-multiline is-vcentered">
              {filtered.map(this.person)}
            </div>
          ) : (
            LoadingOrFallback
          )}

          <footer class="footer">
            <div class="content has-text-centered">
              <p>
                <strong>
                  Made with{' '}
                  <span role="img" area-label="heart">
                    ❤️
                  </span>
                </strong>{' '}
                by <a href="https://www.pedropcruz.pt">Pedro Cruz</a>. The
                source code it's on{' '}
                <a
                  href="https://github.com/pedropcruz/business-card-react-redux"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </p>
            </div>
          </footer>
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
