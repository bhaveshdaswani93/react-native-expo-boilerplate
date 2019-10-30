// This is our main App Containter Where i load fonts required for our app 
import React,{useState} from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import DefaultNavigator from './navigation/DefaultNavigator';

const loadFonts = () => {
  return Font.loadAsync({
    "NunitoSans-Bold": require("./assets/fonts/NunitoSans-Bold.ttf"),
    "NunitoSans-Regular": require("./assets/fonts/NunitoSans-Regular.ttf"),
  });
};

export default function App() {

  const [fontLoaded, setFontloaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontloaded(true)}
        onError={err => console.log(err)}
      />
    );
  }

  return (
    <SafeAreaProvider>
     <DefaultNavigator />
    </SafeAreaProvider>
  );
}

