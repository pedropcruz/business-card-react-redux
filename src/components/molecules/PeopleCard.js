import React from 'react';

const PeopleCardComponent = ({ person }) => {
  return person ? (
    <div className="column is-6">
      <div className="card">
        <div className="card-content has-text-centered">
          <p className="title">{person.name}</p>
          <p className="subtitle">@{person.username}</p>
          <p>
            <strong>{person.email}</strong> <br /> <small>{person.phone}</small>
            <br />
            <button className="button is-text">https://{person.website}</button>
          </p>
          <h3
            className="has-text-weight-medium is-family-secondary has-text-primary tooltip"
            data-hover={person.company.catchPhrase}
          >
            {person.company.name}
          </h3>
        </div>
      </div>
    </div>
  ) : null;
};

export default PeopleCardComponent;
