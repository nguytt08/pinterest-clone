import React from 'react';
import './PictureCard.css';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import deletebutton from '../assets/outline-delete_forever-24px.svg';


const DeleteButton = () => {

  return (
    <div className="delete">
      <IconButton aria-label="Delete">
        <img src = {deletebutton} alt = "deletebutton" />
      </IconButton>
    </div>
  )
      }

//Component to just return the Picture
class PictureCard extends React.Component {
  state = {hover: false}

handleMouseEnter = () => {
  console.log('mouse enter');
  this.setState({hover: true})
  console.log(this.state.hover);
}

handleMouseLeave = () => {
  console.log('mouse leave');
  this.setState({hover: false})
  console.log(this.state.hover);
}



render() {
   return (
    <div className="image"
    onMouseEnter={this.handleMouseEnter.bind(this)}
    onMouseLeave={this.handleMouseLeave.bind(this)}>
    {this.state.hover ? <DeleteButton /> : null}
    <img className="picture"
    src={this.props.link}
    alt="Librarian"
/>
    </div>
)}

}

/*    <Tooltip title={this.props.alt || 'Alt text'}>
    </Tooltip>

*/

export default PictureCard;