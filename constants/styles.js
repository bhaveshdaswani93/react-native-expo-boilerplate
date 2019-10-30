// A common style that can be used in more than one component which can be define here, i found shadow, evlevation as common requirement in my projects. You can alter, add as you like.
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  shawdow: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    elevation: 3,
    backgroundColor: "white"
  }
});
