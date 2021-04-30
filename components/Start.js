import React, { createContext, Component } from 'react';
import { View, Text, TextInput, Button, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

const image = require('../assets/Background_Image.png');

export const HeaderContext = createContext();

export default class Start extends Component {
  state = {
    text: '',
    color: '',
  }

  render() {
    return (
      <HeaderContext.Provider value={{...this.state}}>
        <ImageBackground source={image} style={styles.background}>
          <View style={styles.container}>
              <TextInput
                style={styles.textBox}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
                placeholder='Type here...'
              />
              <Text>You wrote: {this.state.text}</Text>
              <Button title="Go to Chat" onPress={() => this.props.navigation.navigate('Chat')}/>
              <View style={styles.colorContainer}>
                <Text style={styles.colorPallette}>
                  Choose Background Color:
                </Text>
                <View style={styles.colorChoice}>
                  <TouchableOpacity 
                    style={styles.colorOne}
                    onPress = {() => this.setState({color: '#090C08'})}
                  />
                  <TouchableOpacity 
                    style={styles.colorTwo}
                    onPress = {() => this.setState({color: '#474056'})}
                    />
                  <TouchableOpacity 
                    style={styles.colorThree} 
                    onPress = {() => this.setState({color: '#8A95A5'})}
                  />
                  <TouchableOpacity 
                    style={styles.colorFour} 
                    onPress = {() => this.setState({color: '#B9C6AE'})}
                  />
                </View>
              </View>
          </View>
        </ImageBackground>
      </HeaderContext.Provider>
    )
  }
}

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
    backgroundColor: '#090c08',width: 50,
    width: 50,
    height: 50,
    borderRadius: 25, 
    margin: 10
  },
  colorTwo: {
    backgroundColor: '#474056',
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
    backgroundColor: '#B9C6AE',
    width: 50,
    height: 50,
    borderRadius: 25, 
    margin: 10
  }
});