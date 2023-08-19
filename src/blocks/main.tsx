import React, { useEffect, useState } from 'react'
import Nav from '../blocks/nav'
import Content from '../blocks/content'
import ModalEmail from './modalEmail'
import MiniNav from './components/burger'

function Main() {
    const [modalIsOpen, setIsOpen] = useState(false)
    const [currentWidth, setCurrentWidth] = useState(+window.innerWidth)

    const switchModal = (e: boolean) => {
        setIsOpen(e)
    }
    const handleResize = () => {
        setCurrentWidth(+window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize)
    }, [])
    return (
        <section className="center main">
            {currentWidth > 810 ? <Nav /> : <MiniNav />}
            <Content switcher={switchModal} />
            {modalIsOpen ? <ModalEmail switcher={switchModal} /> : <></>}
        </section>
    )
}

export default Main
