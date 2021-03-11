import React from 'react';
import './CardPequeno.css';


function CardPequeno(props) {
    return (
        <div>
            <div className="littlecard-info">
                <img src={ props.imagem } /> <h4>{ props.info }</h4>
            </div>
            
        </div>
   
    )
}

export default CardPequeno;