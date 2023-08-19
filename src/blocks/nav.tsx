import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav className="nav">
            <div className="nav_logo">
                <div className="nav_logo-circle">
                    <div className="nav_logo-blur"></div>
                </div>
                <img src="img/logo.svg" alt="logo" />
            </div>
            <ul className="nav_list">
                <li className="nav_list-text">Главная</li>
                <li>
                    <Link className="nav_list-text" to="/info">
                        Что даст обучение
                    </Link>
                </li>
                <li className="nav_list-button">Личный кабинет</li>
            </ul>
        </nav>
    )
}

export default Nav
