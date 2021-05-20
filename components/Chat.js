import React, { useEffect, useState } from 'react';
import { View, Text, Platform, KeyboardAvoidingView } from 'react-native';
import { HeaderContext } from './HeaderContextProvider';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';

function Chat(props) {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello Developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any'
        },
      },
      {
        _id: 2,
        text: 'This is a system message',
        CreatedAt: new Date(),
        system: true,
      },
    ])
  },[])

  const onSend = (newMessages = []) => {
    setMessages(GiftedChat.append(messages, newMessages));
  }

  const renderBubble = (props) => {
    return (
      <Bubble
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: '#29bb89',
        },
        left: {
          backgroundColor: '#7868e6',
        },
      }} 
      textStyle={{
        left: {
          color: '#fff',
        }
      }}
      />
    )
  }

  return (
    <HeaderContext.Consumer>{(headerCtx) => {
      const { text, color } = headerCtx.state;
      const chatBackgroundColor = color;
      props.navigation.setOptions({title: text});
      
      return (
        <View style={{flex:1, backgroundColor: chatBackgroundColor}}>
          <GiftedChat
            renderBubble={props => renderBubble(props)}
            messages={messages}
            onSend={(messages) => onSend(messages)}
            user={{
              _id:1,
            }}
          />
          { Platform.OS === 'android' ? 
            <KeyboardAvoidingView behavior="height" /> : 
            null
          }
        </View>

      )
    }}    
    </HeaderContext.Consumer>
  )
}
export default Chat;