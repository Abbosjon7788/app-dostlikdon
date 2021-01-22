import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getMenus} from "../redux/actions/adminMenuAction";

class NavbarPart extends Component {

    componentDidMount() {
        this.props.getMenus();
    }

    render() {
        return (
            <div>
                <section id="navbar-part">
                    <div className="container my-3">
                        <div className="row">
                            <ul className="nav w-100">
                                <li className="nav-item mr-4">
                                    <div className="home-logo d-flex align-items-center justify-content-center">
                                        <img src="../icons/home.png" alt=""/>
                                    </div>

                                </li>

                                {this.props.menus.map((item) => (
                                    <li className="nav-item mr-4">
                                        <a className="nav-link text-dark" href="#">{item.nameUz}</a>
                                    </li>
                                ))}



                                


                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        menus: state.menu.menus
    }
}

export default connect(mapStateToProps, {getMenus})(NavbarPart);