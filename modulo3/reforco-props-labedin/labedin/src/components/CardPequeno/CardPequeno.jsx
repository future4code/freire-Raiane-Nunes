import React from 'react';
import PequenoCard from 'styled-components'


const LittleCard = PequenoCard.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 10px;
    margin-top: 5px;
    gap: 5px;
    img{
      width: 10%
    }
`


function CardPequeno(props) {
    return (
        <LittleCard>
            <img src={props.imagem} />
            <h4>{props.nome}</h4>
            <p>{props.descricao}</p>
        </LittleCard>

    )
}

export default CardPequeno;