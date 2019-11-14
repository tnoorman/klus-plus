import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserInfo extends Component {
    render() {
        return(
            <div className="user-info profile">
                <span className="back-btn">
                    <Link to="/">
                        <i class="fal fa-arrow-left"></i>
                    </Link>
                </span>
                <h3>Profiel</h3>
                <div className="profile__container">
                    <div className="profile__picture">
                        <img src="" alt="profile-picture" />
                        <p>USER NAME HERE</p>
                    </div>
                    <form className="form">
                        <div className="form-group">
                            <label for="email">E-mail</label>
                            <input type="text" name="email" autoComplete="new-password" />
                        </div>
                        <div className="form-group">
                            <label for="address">Adres</label>
                            <input type="text" name="address" autoComplete="new-password" />
                        </div>
                        <div className="form-group">
                            <label>Postcode</label>
                            <input type="text" name="postalCode" autoComplete="new-password" />
                        </div>
                        <div className="form-group">
                            <label>Telefoonnummer</label>
                            <input type="text" name="phoneNumber" autoComplete="new-password" />
                        </div>
                        <div className="cta">
                            <Link to="/" className="danger">Deactiveren</Link>
                            <div className="cta-button">
                                <Link to="/profile">Opslaan</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            
        )
    }
}

export default UserInfo;