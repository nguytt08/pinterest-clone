import React from 'react';
import './PictureCard.css';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import deleteButton from '../assets/outline-delete_forever-24px.svg';


const handleDelete = () => {
  console.log('delete pressed')
  //need to write axios delete request here and use the props index to delete from database then rerender
}

const DeleteButton = (props) => {

  return (
    <div className="delete">
      <IconButton aria-label="Delete" onClick={handleDelete.bind(this)}>
        <img src = {deleteButton} alt = "deletebutton" />
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
    {this.state.hover ? <DeleteButton link_id={this.props.link_id}/> : null}
    <img className="picture"
    src={this.props.link}
    alt={this.props.alt}
    link_id={this.props.link_id}
/>
    </div>
)}

}

/*    <Tooltip title={this.props.alt || 'Alt text'}>
    </Tooltip>

*/

export default PictureCard;