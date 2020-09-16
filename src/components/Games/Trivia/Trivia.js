import React from 'react';
import './Trivia.css';
import CardInitial from './Card/CardInitial';
import Row from 'react-bootstrap/Row';
import { Context } from '../../../Context/Provider';
import { Shuffle } from '../../../Utils/common';

const Trivia =()=>{
    
    const { state } = React.useContext(Context);
    
    let cardsShuffle = Shuffle ([...state.triviaQuestions[state.language].questions.dificulty1])
    
    const cards = cardsShuffle.filter(card => card.points === 100)
    const cards2 = cardsShuffle.filter(card => card.points === 200)
    const cards3 = cardsShuffle.filter(card => card.points === 300)
    cards.push(...cards2)
    cards.push(...cards3)
    
    console.log(cards)

    return(
        <div className="trivial-grid">
            {cards.map(( card, i) => (
                    <Row bsPrefix="card-row">
                        <CardInitial 
                        points= {card.points}
                        question={card.question} 
                        correct={card.correct} 
                        incorrect={card.incorrect} 
                        />                           
                    </Row>
                ) 
            )} 
        </div>
    )
}

export default Trivia