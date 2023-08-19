import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Times } from '../modalEmail'

function Menu(props: { switcher: (e: boolean) => void }) {
    const { switcher } = props

    return (
        <section className='nav_wrapper puff-in-center'>
            <ul className="nav_list slide-in-right">
                <img className="nav_logo-pic" src="img/logo.svg" alt="logo" />
                <li className="nav_list-text">Главная</li>
                <li>
                    <Link className="nav_list-text" to="/info">
                        Что даст обучение
                    </Link>
                </li>
                <li className="nav_list-button">Личный кабинет</li>
                <Times switcher={switcher} />
            </ul>
        </section>
    )
}

function Burger(props: { switcher: (e: boolean) => void }) {
    const { switcher } = props

    return (
        <div
            onClick={() => {
                switcher(true)
            }}
            className="nav_burger"
        >
            <span className="nav_burger-line"></span>
            <span className="nav_burger-line"></span>
        </div>
    )
}

function MiniNav() {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const switcher = (e: boolean) => {
        setMenuIsOpen(e)
    }
    return (
        <nav className="nav">
            <div className="nav_logo">
                <div className="nav_logo-circle">
                    <div className="nav_logo-blur"></div>
                </div>
                <img className="nav_logo-pic" src="img/logo.svg" alt="logo" />
            </div>

            {menuIsOpen ? <Menu switcher={switcher} /> : <Burger switcher={switcher} />}
        </nav>
    )
}

export default MiniNav
