import React from 'react';
import { View, Text } from 'react-native';
import { HeaderContext } from './HeaderContextProvider';

export default class Chat extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <HeaderContext.Consumer>{(headerCtx) => {
        const { text, color } = headerCtx;
        this.props.navigation.setOptions({ title: text });
        console.log(text);
        return (
          <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: {color}}}>
            <Text>Hello Chat!</Text>
          </View>
        )
      }}    
      </HeaderContext.Consumer>
    )
  }
}