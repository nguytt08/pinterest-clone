import React, { Component } from 'react';
import './App.css';
import PictureCard from './components/PictureCard.js';
import LinkForm from './components/LinkForm.js';

import axios from 'axios';

class App extends Component {
  state = {
    inputLink: 'https://media.istockphoto.com/photos/student-searching-books-picture-id623200866',
    links: []
  }

  // https://images.pexels.com/photos/1120162/pexels-photo-1120162.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940

  componentDidMount() {
    axios.get(`http://localhost:4000/links`)
    .then(res => {
      console.log('component did mount: ' + JSON.stringify(res.data));
      console.log('type: ' + typeof(res.data));
      const links = res.data;
      this.setState( {links: links} );
    })
  }

  handleInputChange = (e) => {
    this.setState({inputLink : e.target.value});
  }


  handleSubmit = (link) => {
    console.log("handle submit link: " + link);
    // this.setState({
    //   url: link
    // })

    // this.state.links.map(link => {
    //   console.log('link map: ' + link);
    // })

    // this.state.links
    console.log("current state: " + (this.state.links[0].url));

    // this.state.links.map(link => console.log('linksss: ' + link));
    // console.log('type of: ' + this.state.links[0]);
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
        {this.state.links.map(link => {
          return <PictureCard link={link.url} />
        })
      }
      </div>
    );
  }
}
          // <LinkForm />

export default App;
