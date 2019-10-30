// This the root component and it handle status bar and nodg. So your main screen appear in safe area
import React from "react";
import { View, StatusBar } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import Colors from "../constants/colors";

const RootComponent = props => {
  return (
    <SafeAreaView style={{ flex: 1,backgroundColor:Colors.primary }} forceInset={{ top: 'always' }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.primary}
      />
      {props.children}
    </SafeAreaView>
  );
};

export default RootComponent;
