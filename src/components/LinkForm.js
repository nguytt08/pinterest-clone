import React from 'react';

class LinkForm extends React.Component {
  state = {
    url: undefined
  }

inputFormHandler = (e) => {
  this.setState({
    url: e.target.value
  })

  console.log("input form handler : " + e.target.value)
}

// handleSubmit = (e) => {
//   console.log('submit button ');
//   console.log('state: ' + this.state.url);
// }

  render() {
  return (
      <div>
        <input type="text" name="photolink" size="70" onChange={this.inputFormHandler} />
      </div>
    )
}
}

        // <input type="submit" value="Submit" onClick={this.handleSubmit} />
export default LinkForm;