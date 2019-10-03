import React from 'react'
import {Card} from '../Card/Card'

export const CardDeck = ({state}) => {
    const idvCard = state.map((item,index) => {
        return (
        <Card 
        {...item}
        key={index} 
        />
        )
    })
    return(
        <ul>{idvCard}</ul>
    )
}

