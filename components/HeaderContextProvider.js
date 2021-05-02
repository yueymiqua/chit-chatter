import React, { createContext, Component } from 'react';

const image = require('../assets/Background_Image.png');

export const HeaderContext = createContext();

class HeaderContextProvider extends Component {
  state = {
    text: '',
    color: '',
  }

  changeText(text) {
   this.setState({text})
  }

  render() {
    return (
      <HeaderContext.Provider value={{state: this.state, function1: this.changeText}}>
        { this.props.children }
      </HeaderContext.Provider>
    )
  }
}

export default HeaderContextProvider;