import React, {useState} from 'react';
import {View, TextInput, Animated, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import DefTextInput from './TextInput';
import Button from './Button';


const SendBar = () =>{
  const [bg_color] = useState('#4af');
  const [title] = useState("send"); 
  const [wd_value] = useState(new Animated.Value(0));
  // var bg_color = "#4af"
  // var title = "send"

Animated.timing(
  wd_value,
  {
    toValue: 400 ,
    duration: 500,
  }
).start();


  return(
    <Animated.View style={{width: wd_value}}>
      <View style={styles.bar}>
          <DefTextInput/>
          <Button
          />
      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  bar:{
    flexDirection:'row',
    justifyContent: 'center',
    margin: 20,
  },

});


export default SendBar;
