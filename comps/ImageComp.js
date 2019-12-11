import React, {useState} from 'react';
import {View, Image, Animated} from 'react-native';

function ImageComp (){

  const [wd_value] = useState(new Animated.Value(1));

  Animated.timing(

    wd_value,
    {
      toValue:100,
      duration:500,
      delay:100
    }

  ).start();

  return(

    <View>

        <Animated.Image 
          style={{width:wd_value, height:wd_value, borderRadius:50, borderColor:'green', borderWidth:4}}
          source={require('./default-placeholder.png')}
        />

    </View>

  )
}

export default ImageComp;
