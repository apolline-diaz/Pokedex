import React from "react";

function CardList({ id, name, image, type }) {
  return (
    <>
      <div class='home-card'>
        <div className='number'>
          <small>#0{id}</small>
        </div>
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <small>type : {type}</small>
        <button>Details</button>
      </div>
    </>
  );
}

export default CardList;
