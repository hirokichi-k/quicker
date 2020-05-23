import React, { Component } from 'react';
import './App.css';
import SendBox from './send.js'
import RecieveBox from './recieve.js'
import MediaQuery from "react-responsive";

import Header from "./Header";
import Footer from "./Footer"


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
      <div className="App" id="container">
        <Header />
        <div id="contents">
          <MediaQuery query="(max-width: 767px)">
            <h2>短文がすぐに送信できます！</h2>
          </MediaQuery>
          <MediaQuery query="(min-width: 768px)">
            <h1>短文がすぐに送信できます！</h1>
          </MediaQuery>
          <button id="bt1" onClick={() => { this.DoChange_Send();}}>送信する</button>
          <button id="bt2" onClick={() => { this.DoChange_recieve(); }}>受信する</button>
          <div>{this.RenderSendText()}</div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;
