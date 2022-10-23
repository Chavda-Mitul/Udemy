import React from "react";
function Card(props) {
  return (
    <div className="card">
        <h3>{props.name}</h3>
        <img src={props.img} />
        <p>{props.tel}</p>
        <p>{props.email}</p>
    </div>
  );
};
export default Card;