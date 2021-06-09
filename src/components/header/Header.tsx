import { Link } from 'react-router-dom'

import logo from '../../images/logo_min.png'

import "./header.scss"

export const Header = () => {
    return (
        <div className="section-header">
            <div>
                <Link to="/">
                    <img src={logo} alt="Logo"/>
                </Link>
            </div>

            <div className="festival-heading">
                <h1 className="festival-title">
                    <span>Waiheke </span>
                    <span className="title-jazz">Jazz </span>
                    <span>Festival</span>
                </h1>
                <h2  className="festival-dates">
                Easter 2022 April 15 - 18
                </h2>

            </div>
        </div>
    )
}

export default Header