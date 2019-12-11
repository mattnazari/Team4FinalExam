import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Image
} from "react-native";

const Tabs = ({title,onPress,defColor,setDefColor,defColor2,setDefColor2}) => {
  const [tabWidth] = useState(new Animated.Value(0));
  const [tabHeight] = useState(new Animated.Value(0));
  const [tabColor] = useState(new Animated.Value(0));

  // const [tabColor2,setTabcolor2] = useState(defColor);

  var myTabWidth = tabWidth.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "98%"]
  });

  var myTabHeight = tabHeight.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "10%"]
  });

  var myTabColor = tabColor.interpolate({
    inputRange: [0, 1],
    outputRange: ["#000000", defColor]
  });

  useEffect(() => {
    Animated.timing(tabWidth, {
      toValue: 1,
      duration: 500
    }).start();
    Animated.timing(tabHeight, {
      toValue: 1,
      duration: 500
    }).start();
    Animated.timing(tabColor, {
      toValue: 1,
      duration: 500
    }).start();
  }, []);

  // const styles = StyleSheet.create({
  //     MainContainer:{
  //         width:{myTabWidth},
  //         height:'10%',
  //         backgroundColor:'lightGreen'
  //     }
  // })

  return (
    <View
      style={{
        flex:1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Animated.View
        style={{
          width: myTabWidth,
          height: myTabHeight,
          backgroundColor: myTabColor,
          alignItems: "center",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10
        }}
      >
        <TouchableOpacity 
          style={{flex:1, justifyContent:'center', alignItems:'center', width:200, height:200}}
          onPress={onPress}
        >
  
          <Image
            style={{ width: "20%", height: "20%", padding:20 }}
            source={require("../tabImg.png")}
          />
          <Text style={{ color: "white" }}>{title}</Text>
          </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

Tabs.defaultProps = {
  title:"Default Title",
  onPress: () => {},
  defColor:"#57af9b"
};

export default Tabs;
