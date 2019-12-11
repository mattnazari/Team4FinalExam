import React from 'react';
import {View, TextInput, Animated, StyleSheet} from 'react-native';
import DefTextInput from './TextInput';
import Button from './Button';

const SendBar = () =>{
  return(
    <View style={styles.bar}>
        <DefTextInput>
        </DefTextInput>
        <Button></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  bar:{
    flexDirection:'row',
    justifyContent: 'center',
  },

});


export default SendBar;
