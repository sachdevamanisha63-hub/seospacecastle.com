import React, { useState, useMemo } from "react";
import PhoneInput from "react-phone-input-2";
import Select from "react-select";
import { City } from "country-state-city"; // Import the data package
import "react-phone-input-2/lib/style.css";

const serviceOptions = [
    { value: "uiux", label: "UI / UX Design" },
    { value: "dev", label: "Development" },
    { value: "marketing", label: "Digital Marketing" },
];

const ContactForm = () => {
    const [phone, setPhone] = useState("");
    const [service, setService] = useState<any>(null);
    const [city, setCity] = useState<any>(null);

    // Memoize city list for performance (Loading all cities from India 'IN')
    // You can change 'IN' to any country code, or remove it to get the whole world
    const allCities = useMemo(() => {
        return City.getCitiesOfCountry("IN")?.map((city) => ({
            value: city.name,
            label: city.name,
            stateCode: city.stateCode
        })) || [];
    }, []);

    return (
        <section className="cosmic-contact">

            <div className="corner-shape left"></div>
            <div className="corner-shape right"></div>

            <div className="form-wrapper">
                <div className="glass-content">
                    <div className="header-area">
                        <h2>Your Vision <span className="text-gradient">Our Space Castle</span></h2>
                        <p>Sync your project with our global network.</p>
                    </div>

                    <form className="modern-form">
                        <div className="input-group">
                            <input type="text" placeholder="Your Name" required />
                            <input type="email" placeholder="Email Address" required />
                        </div>

                        <div className="input-group">
                            <input type="text" placeholder="Company Name" required />
                            <div className="phone-field">
                                <PhoneInput
                                    country={"in"}
                                    value={phone}
                                    onChange={setPhone}
                                    inputClass="phone-input"
                                />
                            </div>
                        </div>

                        <div className="input-group">
                            <div className="select-wrapper">
                                <Select
                                    options={allCities}
                                    placeholder="Choose Your City"
                                    value={city}
                                    onChange={setCity}
                                    isSearchable={true}
                                    classNamePrefix="service-select"
                                    captureMenuScroll={false}
                                    filterOption={(candidate, input) => {
                                        if (!input) return true;
                                        return candidate.label.toLowerCase().includes(input.toLowerCase());
                                    }}
                                />
                            </div>

                            <div className="select-wrapper">
                                <Select
                                    options={serviceOptions}
                                    placeholder="Choose a Service"
                                    value={service}
                                    onChange={setService}
                                    isSearchable={false}
                                    classNamePrefix="service-select"
                                />
                            </div>
                        </div>

                        <textarea placeholder="Tell us more about your project..." rows={5}></textarea>

                        <button type="submit" className="precision-btn">
                            <span className="btn-text">Sync with the Castle</span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;