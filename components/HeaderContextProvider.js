import React, { createContext, useState } from 'react';

const image = require('../assets/Background_Image.png');

export const HeaderContext = createContext({
  color: '',
  text: '',
  changeColor: () => {},
  changeText: () => {},
});

const HeaderContextProvider = ({children}) => {
  const [text, setText] = useState('');
  const [color, setColor] = useState('');

  const changeColor = (hexCode) => setColor(hexCode);
  const changeText = (string) => setText(string);
  
  return (
    <HeaderContext.Provider value={{color, text, changeColor, changeText}}>
      { children }
    </HeaderContext.Provider>
  )
}


export default HeaderContextProvider;