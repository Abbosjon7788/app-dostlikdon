import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {TOKEN_NAME} from "../tools/constants";

class AdminLayout extends Component {
    render() {
        return (
            <div className='admin-layout'>
                <div className="admin-navbar"></div>

                <div className="admin-content d-flex">
                    <div className="admin-content-left">

                        <div className="d-flex align-items-center">
                            <div className='user-image'>
                                <span className='icon icon-user'></span>
                            </div>
                            <div>
                                <h5 className='mb-0'>Nizom Muxammatov</h5>
                                <p className='mb-0'>Administrator</p>
                            </div>
                        </div>

                        <ul className='nav flex-column mt-4'>
                            <li className='nav-item'><Link className='nav-link text-white' to="/admin/news">Yangiliklar</Link></li>
                            <li className='nav-item'><Link className='nav-link text-white' to="/admin/menus">Menyular</Link></li>
                            <li className='nav-item'><Link className='nav-link text-white' to="/admin">Menyular</Link></li>
                            <li className='nav-item'><Link className='nav-link text-white' to="/admin">Menyular</Link></li>
                            <li className='nav-item'><Link className='nav-link text-white' to="/admin">Menyular</Link></li>
                            <li className='nav-item'><Link className='nav-link text-white' to="/admin">Menyular</Link></li>
                            <li className='nav-item'><Link className='nav-link text-white' to="/admin">Menyular</Link></li>
                            <li className='nav-item mt-4'><Link className='nav-link text-white' to="/" onClick={() => {localStorage.removeItem(TOKEN_NAME)}}>Chiqish</Link></li>
                        </ul>

                    </div>
                    <div className="admin-content-right">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminLayout;