import React from 'react';
import './PictureCard.css';

const PictureCard = (props) => {

  return <img className="picture"
    src={props.link}
    alt="Librarian" />
}


export default PictureCard;