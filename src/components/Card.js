import React from 'react'
import "./Card.scss"

const Card = (props) => {
    return (
        <div className="row aic bg card-wrapper">
            <div className="col-xs-12 col-md-4 offset-md-2">
                {props.children}
            </div>
            <div className="col-xs-12 col-md-5 md-offset-1 wraper-state">
            {props.card.map((el, index)=>
                <div className="stats-item">
                    <img src={el.icon} alt={el.title} width="50" />
                    <h2>{el.title}</h2>
                    <p>{el.desc}</p>
                </div>
            )}
            </div>
        </div>
    )
}

export default Card