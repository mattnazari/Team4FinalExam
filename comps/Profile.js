import React from 'react';
import {View, Text} from 'react-native';
import ImageComp from './ImageComp';
import DefTextInput from './TextInput';
import Button from './Button';

const Profile = () =>{
  return(
    <View style={{flex:1, flexDirection:'column', alignItems:'flex-start',justifyContent:'space-between', paddingTop:200, paddingBottom:200}}>
        <ImageComp/>
          <Text>Username:</Text>
          <DefTextInput/>
          <Text>Image URL</Text>
          <DefTextInput/>
          <Button
          bgcolor="yellow"
          title="save"
          />
    </View>
  )
}

export default Profile;
