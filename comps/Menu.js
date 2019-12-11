import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

import Tabs from "./Tabs";

const Menu = () => {

  const [defColor,setDefColor] = useState("#57af9b");
  const [defColor2,setDefColor2] = useState();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
      }}
    >
      {/* <View style={{width:'80%',height:'10%',flexDirection:'row'}}> */}
      <View style={{ flex: 1 }}>
        <Tabs 
          title="Menu Item 1"
          defColor={defColor}
          setDefColor={setDefColor}
          onPress={()=>{
            setDefColor('skyblue');
          }}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Tabs 
          title="Menu Item 2"
          defColor={defColor}
          setDefColor={setDefColor}
          onPress={()=>{
            setDefColor('skyblue');
          }}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Tabs 
          title="Menu Item 3"
          defColor={defColor}
          setDefColor={setDefColor}
          onPress={()=>{
            setDefColor('skyblue');
          }}
        />
      </View>
      {/* </View> */}
    </View>
  );
};

export default Menu;
