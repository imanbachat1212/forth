import React, { useState } from "react";
import CountryData from "../assests/CountryData";
import { v4 as uuidv4 } from "uuid";
import './Contact.css'


const Contact = () => {

    // eslint-disable-next-line no-unused-vars
    const [countries, setCountries] = useState(CountryData);
    console.log("countries", countries);

    const [searchCode, setSearchCode] = useState();
    console.log("searchCode", searchCode);

    const searchCountry = countries.find((obj) => {
        if (obj.code === searchCode) {
            return true;
        }
        return false;
    });
    console.log("searchCountry", searchCountry);
    return (

        <>
            <div className='wrapper' id='contact'>
                <div>
                    <h1 className='title-contact  '>
                        Get to know each other <br></br>and start making value now!
                    </h1>
                </div>
                <form className="contact-form row">
                    <div className="form-field col x-50">
                        <input id="name" className="input-text js-input" type="text" required></input>
                        <label className="label" for="name">Full Name</label>
                    </div>
                    <div className="form-field col x-50">
                        <input id="email" className="input-text js-input" type="email" required></input>
                        <label className="label" for="email">E-mail</label>
                    </div>
                    <div className="form-field col x-50">
                        <select
                            value={searchCode}
                            onChange={(e) => setSearchCode(e.target.value)}
                            className=" input-text js-input" id="country"
                        >
                            <option value="" hidden className="input-text js-input" >
                                --Select Country--
                            </option>
                            {
                                countries.map((item) => {
                                    return (
                                        <option key={uuidv4()} value={item.code}>
                                            {item.name}
                                        </option>
                                    );
                                })}
                        </select>
                    </div>
                    <div className="form-field col x-50 autofill" >
                        <input
                            id="number"
                            value={searchCountry && ((searchCountry.dial_code) || "")}
                            type="tel"
                            placeholder="Code"
                            className="input-text js-input "

                        />
                        <input
                            type="tel"
                            placeholder="Phone"
                            className="input-text js-input  "
                            id="tel"
                        />

                    </div>
                    <div className="form-field col x-50">
                        <input id="subject" className="input-text js-input" type="text" required></input>
                        <label className="label" for="subject">Subject</label>

                    </div>
                    <div className="form-field col x-50">
                        <input id="company" className="input-text js-input" type="text" required></input>
                        <label className="label" for="company">Company</label>
                    </div>
                    <div className="form-field col x-100">
                        <input id="message" className="input-text js-input" type="text" required></input>
                        <label className="label" for="message">Message</label>
                    </div>
                    <br></br>
                    <div className="form-field col x-100 align-center">
                        <input className="submit-btn" type="submit" value="Submit" id="submit"></input>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Contact
