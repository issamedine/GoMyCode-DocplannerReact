import React from "react";
import "./Boxes.scss";

export default function Boxes(props) {
  return (
    <div className="row">
      {props.boxes.map(el => (
        <div className="hello col-md-6">
          <div className={el.myClass}>
            <p>{el.title}</p>
            <h3>{el.subTitle}</h3>
            {el.select ? (
              <select>
                <option>Choose your country</option>
                <option>{el.select.map(item => item)}</option>
              </select>
            ) : null}

            <img src={el.pic} width="400" />
          </div>
        </div>
      ))}
    </div>
  );
}
