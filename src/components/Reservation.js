import React from "react";
import "./Reservation.scss";

const Reservation = props => {
  return (
    <div className="container">
      <div className="reservation-wrapper">
      <h1>Improve the lives of millions. Change yours forever</h1>
      <p>
        More than 1000 team mates share our same vision, goals and passion. With
        offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and Curitiba,
        our search for great talent never stops.
      </p>
      </div>
      <div className="row">
        {props.reservation.map((el, id) => (
          <div className="col-xs-12 col-md-4">
            <div className="card-item">
              <img src={el.img} alt="" className="w-100" />
              <div className="office-desc">
                <span>{el.ville}</span>
                <a href="#" className="btn-desc">{el.btn}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reservation;
