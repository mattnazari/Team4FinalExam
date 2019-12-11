import React, {useState} from 'react';
import {View, Image, TextInput, StyleSheet, Animated} from 'react-native';

function DefTextInput(){
const [value, onChangeText] = useState('Send Message');
const [wd_value] = useState(new Animated.Value(0));

Animated.timing(
  wd_value,
  {
    toValue: 400 ,
    duration: 500,
    delay: 100
  }
).start();

  return(
    <Animated.View style={{width: wd_value, flex:1, justifyContent:'center', alignItems:'center'}}>
    <Animated.View style={styles.container}>
       <Image source ={require('../Editing-Text-icon.png')}
          style={styles.icon}/>
        <TextInput style={styles.txtinput}
          onChangeText={text => onChangeText(text)}
          value={value}
          />
      </Animated.View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    padding: 30,
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'white'

  },

  txtinput:{
      height: 60,
      width: "90%",
      color: '#aaaaaa',
      marginRight:10,
      backgroundColor: "white",
      },

  icon:{
    width:30,
    height: 30,
    margin: 10,
  }
})


export default DefTextInput;
