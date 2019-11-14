import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserInfo extends Component {
    render() {
        return(
            <div className="user-info">
                <span className="back-btn">
                    <Link to="/">
                        <i class="fal fa-arrow-left"></i>
                    </Link>
                </span>
                <h3>Uw gegevens</h3>
                <div className="user-info__container">
                    <form className="form">
                        <div className="form-group">
                            <label for="firstName">Voornaam</label>
                            <input type="text" placeholder="John" name="firstName" autoComplete="new-password" />
                        </div>
                        <div className="form-group">
                            <label for="lastName">Achternaam</label>
                            <input type="text" placeholder="Doe" name="lastName" autoComplete="new-password" />
                        </div>
                        <div className="form-group">
                            <label>Straat & huisnummer</label>
                            <input type="text" placeholder="Harste 123" name="address" autoComplete="new-password" />
                        </div>
                        <div className="form-group">
                            <label>Postcode</label>
                            <input type="text" placeholder="1234 XY" name="postalCode" autoComplete="new-password" />
                        </div>
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="text" placeholder="johndoe@gmail.com" name="email" autoComplete="new-password" />
                        </div>
                        <div className="form-group">
                            <label>Telefoonnummer</label>
                            <input type="text" placeholder="0515123456" name="phoneNumber" autoComplete="new-password" />
                        </div>
                        <div className="cta">
                            {/* <Link to="/">Terug</Link> */}
                            <div className="cta-button">
                                <Link to="/request-repair">Verder</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            
        )
    }
}

export default UserInfo;