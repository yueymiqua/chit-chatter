import React, { useEffect, useState } from 'react';
import { View, Text, Platform, KeyboardAvoidingView } from 'react-native';
import { HeaderContext } from './HeaderContextProvider';
import { GiftedChat } from 'react-native-gifted-chat';

function Chat(props) {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([{
      _id: 1,
      text: 'Hello Developer',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any'
      }
    }])
  },[])

  const onSend = (newMessages = []) => {
    setMessages(GiftedChat.append(messages, newMessages));
  }

  return (
    <HeaderContext.Consumer>{(headerCtx) => {
      const { text, color } = headerCtx.state;
      const chatBackgroundColor = color;
      props.navigation.setOptions({title: text});
      
      return (
        <GiftedChat
          messages={messages}
          onSend={(messages) => onSend(messages)}
          user={{
            _id:1,
          }}
        />
      )
    }}    
    </HeaderContext.Consumer>
  )
}
export default Chat;




// <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: chatBackgroundColor}}>
//   <Text>Hello Chat!</Text>
// </View>