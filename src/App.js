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

  getLinks() {
    axios.get(`http://localhost:4000/links`)
    .then(res => {
      console.log('links: ' + res.data);
      const links = res.data;
      this.setState( {links: links} );
    })
  }

  componentDidMount() {
    axios.get(`http://localhost:4000/links`)
    .then(res => {
      console.log('links: ' + res.data);
      const links = res.data;
      this.setState( {links: links} );
    })
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevState.links !== this.state.links) {
      // this.getLinks();
      console.log('prev state: ' + JSON.stringify(prevState.links));
      console.log('this state: ' + JSON.stringify(this.state.links));
      this.setState({ links: this.state.links})
    }
  }

  handleInputChange = (e) => {
    this.setState({inputLink : e.target.value});
  }


  handleSubmit = (link) => {
    const newLink = {
      link: this.state.inputLink};;
    console.log(newLink);

    axios.post(`http://localhost:4000/addlink`, {newLink})
      .then(res => {
        console.log(res);
      }).then(() => {
        this.getLinks();
      })

      this.setState({inputLink: ''});
      // this.getLinks();
  }

  render() {
    return (
      <div className="App">
        <h1>Pinterest</h1>
        <div>
          <input type="text" size="70" value={this.state.inputLink} onChange={this.handleInputChange} />
          <input type="submit" value="Submit" onClick={this.handleSubmit}/>
        </div>
        {this.state.links.map(link => {
          return <PictureCard link={link.url} key={link.link_id}/>
        })
      }
      </div>
    );
  }
}
          // <LinkForm />

export default App;
