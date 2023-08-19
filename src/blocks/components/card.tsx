import React from 'react'
import { type cardType } from '../../types'

export function Card(props: cardType) {
    const { img, text } = props
    const regex = /^\/img\/(.*)_em.svg$/
    const alt = img.match(regex)?.[1]
    return (
        <div className="info_cards-item">
            <div className="info_cards-upper">
                <div className="info_cards-img">
                    <img src={img} alt={`emoji ${alt}`} />
                </div>
                <p className="info_cards-text">{text}</p>
            </div>
            <div className="info_cards-overlay"></div>
        </div>
    )
}
