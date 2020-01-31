import React from 'react'
import "./Pres.scss"

const Pres = (props) => {
    return (
     
        <div className="row presentation">
            <p className="w-100 tac"><img src="https://www.docplanner.com/img/sygnet.png" alt=""/></p>
            <h1 className="tac">Making the healthcare experience more human</h1>
            {props.pres.map((el, key)=> 
            <div className="col-xs-12 col-md-6 para"><p>{el.desc}</p></div>)}
            
        </div>
    )
}
export default  Pres    

