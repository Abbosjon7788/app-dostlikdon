import React, {Component} from 'react';
import {FaPhoneAlt, FiSearch} from "react-icons/all";

class TopTitle extends Component {
    render() {
        return (
            <div>
                <section id="top-title">
                    <div className="container py-4">
                        <div className="row">
                            <ul className="nav w-100">
                                <li className="nav-item mr-5">
                                    <span className="dustlikdon-logo">Dustlikdon.uz</span>
                                </li>
                                <li className="nav-item">
                                    <div className="input-group bg-white border-0 shadow-search">
                                        <div className="input-group-prepend cursor-pointer">
                                            <span className="input-group-text border-0 bg-white"><FiSearch
                                                color="black"/></span>
                                        </div>
                                        <input type="text" className="form-control shadow-none text-dark border-0 w-400"
                                               placeholder="Saytdan izlash"/>
                                    </div>
                                </li>
                                <li className="nav-item ml-auto mr-5">
                                    <a href="#" className="nav-link text-decoration-none">На русском</a>
                                </li>
                                <li className="nav-item">
                                    <div className="phone-number py-2 px-4 d-flex align-items-center cursor-pointer">
                                        <FaPhoneAlt color="#008F48" className="mr-2"/>
                                        <span>99872 335-41-16</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default TopTitle;