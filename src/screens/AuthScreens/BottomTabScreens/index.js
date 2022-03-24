import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  USER_DETAILS,
  HOME_SCREEN,
  JOURNEY_TRACK_SCREEN,
  JOURNEY_LIST_SCREEN,
} from "../../ScreenName";

import Home from "./Home";
import UserDetails from "./UserDetails";
import JourneyList from "./JourneyList";
import JourneyTrack from "./JourneyTrack";

const BottomStack = createBottomTabNavigator();
export default function BottomTabScreens() {
  return (
    <BottomStack.Navigator initialRouteName={HOME_SCREEN}>
      <BottomStack.Screen name={USER_DETAILS} component={UserDetails} />
      <BottomStack.Screen name={HOME_SCREEN} component={Home} />
      <BottomStack.Screen
        name={JOURNEY_TRACK_SCREEN}
        component={JourneyTrack}
      />
      <BottomStack.Screen name={JOURNEY_LIST_SCREEN} component={JourneyList} />
    </BottomStack.Navigator>
  );
}
