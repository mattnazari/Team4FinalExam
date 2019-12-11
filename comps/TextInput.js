import React, {useState} from 'react';
import {View, Image, TextInput, StyleSheet} from 'react-native';

const DefTextInput = () =>{
const [value, onChangeText] = useState('Send Message');

  return(
    <View style={styles.container}>
       <Image source ={require('../Editing-Text-icon.png')}
          style={styles.icon}/>
        <TextInput style={styles.txtinput}
          onChangeText={text => onChangeText(text)}
          value={value}/>
      
    </View>
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
