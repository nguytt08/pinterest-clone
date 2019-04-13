import React, { Component } from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PhotoGrid from './components/PhotoGrid.js';

import axios from 'axios';

class App extends Component {
  //erase inputlinks pre-populated link to empty string
  state = {
    inputLink: 'https://media.istockphoto.com/photos/student-searching-books-picture-id623200866',
    links: null
  }
  // var self = this;

  // https://images.pexels.com/photos/1120162/pexels-photo-1120162.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940

  getLinks() {
    console.log('gettin links');
    axios.get(`http://localhost:4000/links`)
    .then(res => {
      // console.log('links: ' + res.data);
      const links = res.data.reverse();
      if(this.state.links !== links) {
      this.setState( {links: links} );
      }
    })
  }

  componentDidMount() {
    this.getLinks();
  }


  componentDidUpdate(prevProps, prevState) {

    /*Sometimes the photos render after posting a link, sometimes it doesn't.
    At this point, unsure why beause having prevstate set to current state doesn't work.
    I think the promise for the handleSubmit function that calls getLinks() fires immediately sometimes before the state updates
    and sometimes it doesn't which is why new photos only sometimes re-render immediately after a submitted link.
    */

    // if (prevState.links !== this.state.links) {
    //   console.log('prevstate not equal to this.state');
    //   console.log('prev state: ' + JSON.stringify(prevState.links));
    //   console.log('this state: ' + JSON.stringify(this.state.links));

    //   // this.setState({ links: this.state.linksn});
    // }
    //   console.log(prevState.links === this.state.links);
  }

  handleInputChange = (e) => {
    this.setState({inputLink : e.target.value});
  }


  handleSubmit = (link) => {
    const newLink = {
      link: this.state.inputLink};

    axios.post(`http://localhost:4000/addlink`, newLink)
      .then(res => {
        // console.log('response: ' + res);
      }).then(() => {
        this.getLinks();
        this.setState({inputLink: ''});
      })
  }


  render() {

    if (!this.state.links) {
            return <div />
        }

    return (
      <div className="App">
        <h1>Photo Pinterest</h1>
        <div>
          <TextField id="standard-full-width" fullWidth margin="normal" style={{margin: 8}} label="Link" value={this.state.inputLink} onChange={this.handleInputChange}/>
          <Button variant="contained" onClick={this.handleSubmit} >Submit Link </Button>
        </div>
        <PhotoGrid links={this.state.links} />
      </div>
    );
  }
}


export default App;
