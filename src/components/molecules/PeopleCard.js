import React, { Component } from 'react';

export default class PeopleCardComponent extends Component {
  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img
                src="https://bulma.io/images/placeholders/128x128.png"
                alt=""
              />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>John Smith</strong> <small>@johnsmith</small>{' '}
                <small>31m</small>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                efficitur sit amet massa fringilla egestas. Nullam condimentum
                luctus turpis.
              </p>
            </div>
          </div>
        </article>
      </div>
    );
  }
}
