import React, { createContext, Component } from 'react';

const image = require('../assets/Background_Image.png');

export const HeaderContext = createContext();

class HeaderContextProvider extends Component {
  constructor(){
    super();
    this.state = {
    text: '',
    color: '',
    }
    this.changeText = this.changeText.bind(this);
    // this.changeColor = this.changeColor.bind(this);
  }

  changeText(text) {
   this.setState({text})
  }

  // changeColor(color) {
  //   this.setState({color})
  // }

  render() {
    return (
      <HeaderContext.Provider value={{state: this.state, changeText: this.changeText}}>
        { this.props.children }
      </HeaderContext.Provider>
    )
  }
}

// , changeColor: this.changeColor

export default HeaderContextProvider;