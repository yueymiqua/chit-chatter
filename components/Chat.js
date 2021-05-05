import React from 'react';
import { View, Text } from 'react-native';
import { HeaderContext } from './HeaderContextProvider';

export class Chat extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
      <HeaderContext.Consumer>{(headerCtx) => {
        const { text, color } = headerCtx.state;
        console.log({text})
        this.props.navigation.setOptions({ title: text });
        return (
          <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Hello Chat!</Text>
          </View>
        )
      }}    
      </HeaderContext.Consumer>
    )
  }
}
export default Chat;