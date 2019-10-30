// This is our main navigation i have simply provided stack navigation example. You can add what ever requirement you have here
import {
    // createStackNavigator,
    createAppContainer,
  } from "react-navigation";
  import { createStackNavigator } from "react-navigation-stack";

  import HomeScreen from '../screens/HomeScreen';

  const defaultNav = {
    header: null
  };

  const homeStackNav  = createStackNavigator({
      Home:HomeScreen
  },{
    defaultNavigationOptions: defaultNav,
    
  })


  export default createAppContainer(homeStackNav);