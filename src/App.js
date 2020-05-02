import React, { Component } from 'react';
import './App.css';
import FloatWindow from './FloatWindow.js'
import SendBox from './send.js'
import RecieveBox from './recieve.js'

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';



class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      is_send: false,
      is_recieve: false
    }
  }

  DoChange_Send = () => {
    this.setState({
      is_send: true,
      is_recieve:false
    });
  }
  DoChange_recieve = () => {
    this.setState({
      is_send: false,
      is_recieve: true
    });
  }
  RenderSendText = () => {
    if (this.state.is_send) {
      return <SendBox />
    }
    else if (this.state.is_recieve){
      return <RecieveBox />
    }
  }
  render() {
    return (
      <div className="App">
        <h1>短文がすぐに送信できます！</h1>
        <button id="bt1" onClick={() => { this.DoChange_Send();}}>送信する</button>
        <button id="bt2" onClick={() => { this.DoChange_recieve(); }}>受信する</button>
        <div>{this.RenderSendText()}</div>
      </div>
    )
  }
}

export default App;
