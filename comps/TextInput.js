import React, {useState} from 'react';
import {View, Image, TextInput, StyleSheet, Animated} from 'react-native';

function DefTextInput (){
const [value, onChangeText] = useState('Send Message');
const [wd_value] = useState(new Animated.Value(0));

Animated.timing(
  wd_value,
  {
    toValue: 100 ,
    duration: 500,
    delay: 100
  }
)
  return(
    <Animated.View style={styles.container}>
       <Image source ={require('../Editing-Text-icon.png')}
          style={styles.icon}/>
        <Animated.TextInput style={styles.txtinput}
          onChangeText={text => onChangeText(text)}
          // value={value}
          />
      
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
    width: 'wd_value',
  },

  txtinput:{
      height: 60,
      width: "90%",
      color: '#aaaaaa',
      marginRight:10,
      },

  icon:{
    width:50,
    height: 50,
  }
})


export default DefTextInput;
