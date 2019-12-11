import React from 'react';
import {View, Image, TextInput, StyleSheet, Animated} from 'react-native';

const TextInput = () =>{
  return(
    <View>
        <TextInput style={styles.txtinput}>

        </TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  txtinput:{
      flex:1,
      width: '100%',
      height: '50%',
      borderColor: 'grey',
      borderWidth: 1,      
  }
})


export default TextInput;
