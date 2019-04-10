import React from 'react';
import './PictureCard.css';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import deleteButton from '../assets/outline-delete_forever-24px.svg';
import axios from 'axios';


const handleDelete = (link_id) => {
  //need to write axios delete request here and use the props index to delete from database then rerender
  //
    console.log('picturecard delete pressed ' + {link_id: link_id});
        axios.delete(`http://localhost:4000/deletelink`, {data: {link_id: link_id}})
      .then(res => {
        // console.log('response: ' + JSON.stringify(res));
      })

}

/*
onClick function sends in the link_id as an argument to the handleDelete function for the IconButton's onClick.
 */
const DeleteButton = (props) => {
  console.log('link_id ' + props.link_id)
  return (
    <div className="delete">
      <IconButton aria-label="Delete" onClick={() => handleDelete(props.link_id)}>
        <img src = {deleteButton} alt = "deletebutton" />
      </IconButton>
    </div>
  )
      }

//Component to just return the Picture
class PictureCard extends React.Component {
  state = {hover: false}

handleMouseEnter = () => {
  this.setState({hover: true})
}

handleMouseLeave = () => {
  this.setState({hover: false})
}



render() {
   return (
    <div className="image"
    onMouseEnter={this.handleMouseEnter.bind(this)}
    onMouseLeave={this.handleMouseLeave.bind(this)}>
    {this.state.hover ? <DeleteButton link_id={this.props.link_id} /> : null}
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