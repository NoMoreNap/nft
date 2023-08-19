import React from 'react'

function Content(props: { switcher: (e: boolean) => void }) {
    const { switcher } = props
    const openModal = () => {
        switcher(true)
    }
    return (
        <section className="content">
            <p className="content_textarea-text">
                Не упусти возможность войти в <span className="bold">прибыльную нишу</span>
            </p>
            <p className="content_textarea-text">Получи все нужные навыки для заработка на NFT всего за 28 дней!</p>
            <button onClick={openModal} className="content_btn monochrome_btn">
                Начать зарабатывать на NFT
            </button>
            <img src="/img/man_big.png" className="content_pic" alt="man" />
        </section>
    )
}

export default Content
