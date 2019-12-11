import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Image
} from "react-native";

const Tabs = () => {
  const [tabWidth] = useState(new Animated.Value(0));
  const [tabHeight] = useState(new Animated.Value(0));
  const [tabColor] = useState(new Animated.Value(0));

  var myTabWidth = tabWidth.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "25%"]
  });

  var myTabHeight = tabWidth.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "8%"]
  });

  var myTabColor = tabWidth.interpolate({
    inputRange: [0, 1],
    outputRange: ["#000000", "#57af9b"]
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
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Animated.View
        style={{
          width: myTabWidth,
          height: myTabHeight,
          backgroundColor: myTabColor,
          display: "flex",
          alignItems: "center",
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5
        }}
      >
        <TouchableOpacity>
          <Image
            style={{ width: "40%", height: "40%" }}
            source={require("../tabImg.png")}
          />
          <Text style={{ color: "white" }}>Default Tab</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default Tabs;
