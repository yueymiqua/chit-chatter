import React, { useContext } from 'react';
import { View, Text, TextInput, Button, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { HeaderContext } from './HeaderContextProvider';

const image = require('../assets/Background_Image.png');


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBox: {
    borderColor: 'gray', 
    borderWidth: 1, 
    fontSize: 16, 
    fontWeight: '300', 
    opacity: 50,
    position: 'relative',
    padding: 5,
    margin: 20,
    backgroundColor: 'white',
  },
  colorPallette: {
    fontSize: 16,
    fontWeight: '300',
    color: '#757083',
    opacity: 100,
    marginLeft: 30,
  },
  colorContainer: {
    margin: 20,
  },
  colorChoice: {
    flexDirection: 'row',
    position: 'relative'
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  colorOne: {
    backgroundColor: '#caf7e3',width: 50,
    width: 50,
    height: 50,
    borderRadius: 25, 
    margin: 10
  },
  colorTwo: {
    backgroundColor: '#edffec',
    width: 50,
    height: 50,
    borderRadius: 25, 
    margin: 10
  },
  colorThree: {
    backgroundColor: '#8A95A5',
    width: 50,
    height: 50,
    borderRadius: 25, 
    margin: 10
  },
  colorFour: {
    backgroundColor: '#e4bad4',
    width: 50,
    height: 50,
    borderRadius: 25, 
    margin: 10
  }
});

const Start = ({navigation}) => {
  const { changeText, changeColor, text } = useContext(HeaderContext);

  return (
    <ImageBackground source={image} style={styles.background}>
      <View style={styles.container}>
          <TextInput
            style={styles.textBox}
            onChangeText={changeText}
            value={text}
            placeholder='Your name here'
          />
          <Text>You wrote: {text}</Text>
          <Button title="Go to Chat" onPress={() => navigation.navigate('Chat')}/>
          <View style={styles.colorContainer}>
            <Text style={styles.colorPallette}>
              Choose Background Color:
            </Text>
            <View style={styles.colorChoice}>
              <TouchableOpacity 
                style={styles.colorOne}
                onPress = {() => changeColor('#caf7e3')}
              />
              <TouchableOpacity 
                style={styles.colorTwo}
                onPress = {() => changeColor('#edffec')}
                />
              <TouchableOpacity 
                style={styles.colorThree} 
                onPress = {() => changeColor('#8A95A5')}
              />
              <TouchableOpacity 
                style={styles.colorFour} 
                onPress = {() => changeColor('#e4bad4')}
              />
            </View>
          </View>
      </View>
    </ImageBackground>
  )
}


export default Start