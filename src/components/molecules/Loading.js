import React from 'react';

import LoadingSVG from '../atoms/LoadingSVG';

let Loading = ({ fetching }) =>
  fetching ? (
    <div className="loading">
      <LoadingSVG />
    </div>
  ) : null;

export default Loading;
