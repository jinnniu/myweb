import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Progress, Input} from 'semantic-ui-react'

function login(){

  return(
    <div>
    <Input/>
    <Button Primary>LOGOGIN</Button>
    </div>
  )
}



function App() {
  return (
    <div>
    <p>Yuu Jin, Jeong</p>
    <Button Primary>Hi</Button>
    <Progress percent = {33} indicating>
    <login />
    <div>
  );
}

export default App;
