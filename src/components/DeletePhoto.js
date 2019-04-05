import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import deleteIcon from '../assets/twotone-delete-24px.svg';
import Tooltip from '@material-ui/core/Tooltip';


const DeleteButton = () => {

  return (
    <div>
      <IconButton aria-label="Delete">
        <img src = {deleteIcon} />
      </IconButton>
    </div>
  )
      }

      export default DeleteButton;