import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RequestRepair extends Component {
    render() {
        return(
            <div className="request-repair">
                <span className="back-btn">
                    <Link to="/clientinfo">
                        <i class="fal fa-arrow-left"></i>
                    </Link>
                </span>
                <h3>Aanvraag reparatie</h3>
                <div className="request-repair__container">
                    <form className="form" id="request-repair-form">
                        <div className="form-group select-category">
                            <label for="firstName">Categorie</label>
                            <select id="form-select" name="repair-category" size="1">
                                <option value="keuken">Keuken</option>
                                <option vaule="kozijn">Kozijn</option>
                                <option value="veranda">Veranda</option>
                                <option value="laminaat">Laminaat</option>
                            </select>
                            <div className="spinner">
                                <button className="spinner-down-btn" type="button">
                                    <label>
                                        <i className="fal fa-chevron-down"></i>
                                    </label>
                                </button>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="lastName">Beschrijving</label>
                            <textarea placeholder="Beschrijving..." ></textarea>
                        </div>
                        <div className="form-group">
                            <label>Wanneer komt het u het beste uit?</label>
                            <div className="form-group-date">
                                <div className="date">
                                    <div className="date-day">
                                        <label for="day">Dag</label>
                                        <input type="number" placeholder="24" name="date-day" />
                                        <div className="spinner">
                                            <button id="spinner-up" className="spinner-up-btn" type="button">
                                                <i className="fal fa-chevron-up"></i>
                                            </button>
                                            <button id="spinner-down" className="spinner-down-btn" type="button">
                                                <i className="fal fa-chevron-down"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="date-month">
                                        <label for="month">Maand</label>
                                        <select name="date-month" form="request-repair-form">
                                            <option value="januari">januari</option>
                                            <option vaule="februari">februari</option>
                                            <option value="maart">maart</option>
                                            <option value="april">april</option>
                                            <option value="mei">mei</option>
                                            <option value="juni">juni</option>
                                            <option value="juli">juli</option>
                                            <option value="augustus">augustus</option>
                                            <option value="september">september</option>
                                            <option value="oktober">oktober</option>
                                            <option value="november">november</option>
                                            <option value="december">december</option>
                                        </select>
                                        <div className="spinner">
                                            <button className="spinner-down-btn" type="button">
                                                <i className="fal fa-chevron-down"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="date-year">
                                        <label for="day">Jaar</label>
                                        <input type="text" placeholder="24" name="date-year" value="2019" disabled />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Telefoonnummer</label>
                            <input type="text" placeholder="0515123456" name="phoneNumber" autoComplete="new-password" />
                        </div>
                        <div className="cta">
                            {/* <Link to="/userinfo">Terug</Link> */}
                            <div className="cta-button">
                                <Link to="/profile">Verder</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div> 
        )
    }
}

export default RequestRepair;