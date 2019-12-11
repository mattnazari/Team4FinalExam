import React from 'react';
import {View, Image} from 'react-native';

function ImageComp (){

  return(

    <View>

        <Image 
          style={{width:100, height:100, borderRadius:50, borderColor:'green', borderWidth:4}}
          source={require('./default-placeholder.png')}
        />

    </View>

  )
}

export default ImageComp;
