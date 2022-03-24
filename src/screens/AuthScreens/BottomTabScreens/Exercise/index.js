import React from "react";
import { StyleSheet, View, Text, TextInput, SafeAreaView } from "react-native";
import { connect } from "react-redux";
import { regionSearchChange, searchStreet } from "../../../../redux/actions";
import { color } from "../../../../config/appConfig";
import { createStackNavigator } from "@react-navigation/stack";
import { EXERCISE_DETAIL_SCREEN } from "../../../ScreenName";
import ExerciseDetail from "./ExerciseDetail";
import { NavigationContainer } from "@react-navigation/native";
import ExerciseList from "./ExerciseList";
const Stack = createStackNavigator();

function Exercise() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Navigator initialRouteName={EXERCISE_DETAIL_SCREEN}>
        <Stack.Screen
          name={EXERCISE_DETAIL_SCREEN}
          component={ExerciseDetail}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  screenTitle: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  textInput: {
    marginVertical: 20,
    height: 200,
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderColor: color.green,
    borderWidth: 1,
    borderRadius: 30,
  },
});

const mapStateToProps = (state) => {
  return {
    region: state.searchState.region,
    marker: state.searchState.marker,
    person: state.searchState.person,
    streetName: state.searchState.streetName,
    userInfor: state.userState.userInfor,
  };
};

export default connect(mapStateToProps, {
  regionSearchChange,
  searchStreet,
})(Exercise);
