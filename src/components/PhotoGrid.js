import React from 'react';
import PictureCard from './PictureCard.js';
import StackGrid, { transitions, easings } from 'react-stack-grid';
import sizeMe from 'react-sizeme';

const { helix } = transitions;


//StackGrid renders the photos in a format where each column has a maximum of 300 pixels
const PhotoGrid = (props) => {


  return (
    <StackGrid columnWidth = {300} monitorImagesLoaded={true} gutterWidth = {10} gutterHeight = {5} appear = {helix.appear}
    appeared = {helix.appeared} enter = {helix.enter} entered = {helix.entered} leaved = {helix.leaved} duration = {1000}
    easings = {easings.backOut}>
      {props.links.map(link => {
        return <PictureCard link={link.url} key={link.link_id} link_id={link.link_id} getlinks={props.getlinks} alt='pics'/>
      })}
    </StackGrid>
  )
};



export default sizeMe()(PhotoGrid);