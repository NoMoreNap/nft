import React from 'react'
import { Card } from './components/card'
import { cardArray } from '../static/cards'
import { type cardType } from '../types'

export function Info() {
    return (
        <section className="info_wrapper">
            <div className="info">
                <div className="info_content">
                    <h1 className="info_title">Что даст тебе обучение?</h1>
                    <section className="info_cards">
                        {cardArray.map((item: cardType) => (
                            <Card
                                key={((Math.random() * 1000000) >> 0).toString(
                                    16
                                )}
                                img={item.img}
                                text={item.text}
                            />
                        ))}
                    </section>
                </div>
                <div className="info_circles">
                    <div className='info_circles-purple'/>
                    <div className='info_circles-blue'/>
                    <div className='info_circles-purple--blur'/>
                    <div className='info_circles-blured'>
                        <div className='info_circles-blur bottom_left'/>
                        <div className='info_circles-blur top_right'/>
                    </div>
                </div>
            </div>
        </section>
    )
}
