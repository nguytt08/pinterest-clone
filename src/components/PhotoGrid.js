import React from 'react';
import PictureCard from './PictureCard.js';
import StackGrid from 'react-stack-grid';
import sizeMe from 'react-sizeme';


  // const images = [
  //   <img src = 'https://images.pexels.com/photos/2073623/pexels-photo-2073623.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>,
  //   <img src = 'https://images.pexels.com/photos/1415555/pexels-photo-1415555.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>,
  //   <img src = 'https://images.pexels.com/photos/2062429/pexels-photo-2062429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>,
  //   <img src = 'https://images.pexels.com/photos/1098460/pexels-photo-1098460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
  // ]


//Takes inthe prop 
const PhotoGrid = (props) => {


      return (
        <StackGrid columnWidth = {300} monitorImagesLoaded={true} gutterWidth = {10} gutterHeight = {5}>
    {props.links.map(link => {
      return <PictureCard link={link.url} key={link.link_id}/>
        })}
    </StackGrid>
  )
};



export default sizeMe()(PhotoGrid);