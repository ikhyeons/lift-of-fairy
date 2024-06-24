import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Map from "./ingame/Map";
import Select from "./ingame/Select";
import Battle from "./ingame/Battle";
import Shop from "./ingame/Shop";
import Heal from "./ingame/Heal";
import REvent from "./ingame/REvent";
const InGame = () => {
  const StackNav = createStackNavigator();
  return (
    <StackNav.Navigator screenOptions={{ headerShown: false }}>
      <StackNav.Screen name="Select" component={Select} />
      <StackNav.Screen name="Map" component={Map} />
      <StackNav.Screen name="Battle" component={Battle} />
      <StackNav.Screen name="Shop" component={Shop} />
      <StackNav.Screen name="Heal" component={Heal} />
      <StackNav.Screen name="REvent" component={REvent} />
    </StackNav.Navigator>
  );
};

export default InGame;
