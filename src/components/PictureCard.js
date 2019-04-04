import React from 'react';
import './PictureCard.css';

//Component to just return the Picture
const PictureCard = (props) => {

   return <img className="picture"
    src={props.link}
    alt="Librarian" />
}


export default PictureCard;