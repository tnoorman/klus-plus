import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

class SplashScreen extends Component {
    render() {
        return(
            <div className="splash__container">
              <div className="logo">
                <header className="logo__container">
                  <img src={logo} className="logo__img" alt="klus-plus-logo" />
                  <p>KlusPlus</p>
                </header>
              </div>
              <div className="cta">
                <div className="cta__container">
                  <div>
                    <div className="cta__already-user">
                      <p>Al een klant?</p>
                      <a href="#">Inloggen.</a>
                    </div>
                    <div className="cta-button">
                    <Link to="/clientinfo">Direct reparatie aanvragen</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}

export default SplashScreen;