import React from 'react';
import './PictureCard.css';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import deletebutton from '../assets/twotone-delete-24px.svg';


const DeleteButton = () => {

  return (
    <div>
      <IconButton aria-label="Delete">
        <img src = {deletebutton} alt = "deletebutton" />
      </IconButton>
    </div>
  )
      }

//Component to just return the Picture
class PictureCard extends React.Component {
  state = {hover: false}

handleHover = () => {
  console.log('hovering');
  // this.setState({hover: !this.state.hover})
  console.log(this.state.hover);
}



render() {
   return (
    <div>
    {this.state.hover ? <DeleteButton/> : null}
    <Tooltip title={this.props.alt || 'Alt text'}>
    <img className="picture"
    src={this.props.link}
    alt="Librarian"
    onMouseOver={this.handleHover}/>
    </Tooltip>
    </div>
)}

}




export default PictureCard;