import React from 'react';
import { connect } from 'react-redux';

import LoadingSVG from '../atoms/LoadingSVG';

let Loading = ({ fetching }) =>
  fetching ? (
    <div className="loading">
      <LoadingSVG />
    </div>
  ) : null;

const mapStateToProps = (state) => ({ fetching: state.fetching });

Loading = connect(mapStateToProps, null)(Loading);

export default Loading;
