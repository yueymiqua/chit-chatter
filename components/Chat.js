import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { HeaderContext } from './HeaderContextProvider';

function Chat(props) {

  return (
    <HeaderContext.Consumer>{(headerCtx) => {
      const { text, color } = headerCtx.state;
      const chatBackgroundColor = color;
      props.navigation.setOptions({title: text});
      
      return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: chatBackgroundColor}}>
          <Text>Hello Chat!</Text>
        </View>
      )
    }}    
    </HeaderContext.Consumer>
  )
}
export default Chat;