import React, {useState} from 'react';
import {View, Image, TextInput, StyleSheet} from 'react-native';

const DefTextInput = () =>{
const [value, onChangeText] = useState('Default Placeholder');

  return(
    <View>
       <Image source ={require('../Editing-Text-icon.png')}
          style={styles.icon}/>
        <TextInput style={styles.txtinput}
          onChangeText={text => onChangeText(text)}
          value={value}/>
      
    </View>
  )
}

const styles = StyleSheet.create({
  txtinput:{
      height: 80,
      width: "100%",
      borderColor: 'grey',
      borderWidth: 1,
      color: '#aaaaaa',
      flexDirection: 'row',
      },
  icon:{
    width:50,
    height: 50,
    flexDirection:'row',
  }
})


export default DefTextInput;
