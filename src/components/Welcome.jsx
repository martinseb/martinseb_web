import React, { Component } from 'react';

export default class Welcome extends Component {
  render() {
    return (
      <section className="Welcome container">
        <div className="row">
          <div className="one-third column">
            <img src="/img/me.jpg" alt="Martin's photograph" className="WelcomeImg u-max-full-width"/>
          </div>
          <div className="two-thirds column WelcomeText">
            <h1>I'm <b>Martin</b>, <br/> web designer and developer.</h1>
            <h3>I can help you create interesting experiences for your products and users.</h3>
          </div>
        </div>
      </section>
    );
  }
}
