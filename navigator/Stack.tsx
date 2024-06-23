import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import InGame from "../screens/InGame";
import Achieve from "../screens/Achieve";
import Encyclopedia from "../screens/Encyclopedia";
import Settings from "../screens/Settings";
import { StackParamList } from "../types";
const StackNav = createNativeStackNavigator<StackParamList.all>();

const Stack = () => {
  return (
    <StackNav.Navigator screenOptions={{ headerShown: false }}>
      <StackNav.Screen name="Home" component={Home} />
      <StackNav.Screen name="InGame" component={InGame} />
      <StackNav.Screen name="Achieve" component={Achieve} />
      <StackNav.Screen name="Encyclopedia" component={Encyclopedia} />
      <StackNav.Screen name="Settings" component={Settings} />
    </StackNav.Navigator>
  );
};

export default Stack;
