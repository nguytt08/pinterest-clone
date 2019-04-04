import React, { Component } from 'react';
import './App.css';
import PictureCard from './components/PictureCard.js';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import PhotoGrid from './components/PhotoGrid.js';

import axios from 'axios';

class App extends Component {
  state = {
    inputLink: 'https://media.istockphoto.com/photos/student-searching-books-picture-id623200866',
    links: null
  }

  // https://images.pexels.com/photos/1120162/pexels-photo-1120162.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940

  getLinks() {
    axios.get(`http://localhost:4000/links`)
    .then(res => {
      console.log('links: ' + res.data);
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

    if (prevState.links !== this.state.links) {
      // this.getLinks();
      console.log('prevstate not equal to this.state');
      console.log('prev state: ' + JSON.stringify(prevState.links));
      console.log('this state: ' + JSON.stringify(this.state.links));

      // this.setState({ links: this.state.linksn});
      // this.getLinks();
    }
      console.log(prevState.links === this.state.links);
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
        console.log('response: ' + res);
      }).then(() => {
        this.getLinks();
        this.setState({inputLink: ''});
      })

      // this.getLinks();
  }

  render() {

    if (!this.state.links) {
            return <div />
        }

    return (
      <div className="App">
        <h1>Pinterest</h1>
        <div>
          <TextField id="standard-full-width" fullWidth margin="normal" style={{margin: 8}} label="Link" value={this.state.inputLink} onChange={this.handleInputChange} />
          <Button variant="contained" onClick={this.handleSubmit} >Submit Link </Button>
        </div>
        <PhotoGrid links={this.state.links} />
      </div>
    );
  }
}
          // <LinkForm />
          // 
          // 
      //     //         {this.state.links.map(link => {
      //     return <PictureCard link={link.url} key={link.link_id}/>
      //   })
      // }

export default App;
