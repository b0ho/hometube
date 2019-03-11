import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as THREE from 'three';
import words from 'random-words';
import Cube from './Cube';

class App extends Component {
  render() {
    console.log(words(5));
    return (
      <div>hi</div>,
      <Cube></Cube>,
      <div>hello</div>
    );
  }
}

export default App;
