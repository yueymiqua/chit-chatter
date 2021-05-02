import React, { createContext, Component } from 'react';

const image = require('../assets/Background_Image.png');

export const HeaderContext = createContext();

class HeaderContextProvider extends Component {
  state = {
    text: '',
    color: '',
  }

  changeText = (text) => this.setState({text});

  render() {
    return (
      <HeaderContext.Provider value={{...this.state, changeText}}>
        { this.props.children }
      </HeaderContext.Provider>
    )
  }
}

export default HeaderContextProvider;