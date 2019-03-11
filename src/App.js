import React, { Component } from 'react';
import './App.css';
import PictureCard from './components/PictureCard.js';
import LinkForm from './components/LinkForm.js';

class App extends Component {
  state = {
    inputLink: 'https://media.istockphoto.com/photos/student-searching-books-picture-id623200866'
  }

  // https://images.pexels.com/photos/1120162/pexels-photo-1120162.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940

handleInputChange = (e) => {
  this.setState({inputLink : e.target.value});
}


handleSubmit = (link) => {
  console.log("handle submit link: " + link);
  this.setState({
    url: link
  })

  console.log(this.state);
}

  render() {
    return (
      <div className="App">
        <h1>Pinterest</h1>
        <div>
          <input type="text" size="70" value={this.state.inputLink} onChange={this.handleInputChange} />
          <input type="submit" value="Submit" onClick={this.handleSubmit}/>
        </div>
        <PictureCard link={this.state.inputLink}/>
      </div>
    );
  }
}
          // <LinkForm />

export default App;
