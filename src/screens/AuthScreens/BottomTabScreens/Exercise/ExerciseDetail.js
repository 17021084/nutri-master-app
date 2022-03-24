import React from "react";
import {
  SafeAreaView, StyleSheet, Switch, Text,
  TextInput, TouchableOpacity, View
} from "react-native";
import BookmarkIcon from "../../../../components/BookmarkIcon";
import ButtonBox from "../../../../components/common/ButtonBox";
import HoriLine from "../../../../components/common/HoriLine";
import { color } from "../../../../config/appConfig";

const ExerciseDetail = () => {
  const [exercises, setExercises] = React.useState();
  const [showOpt, setShowOpt] = React.useState(false);
  const [options, setOptions] = React.useState({
    gender: "male",
    weight_kg: 0,
    height_cm: 122,
    age: 32,
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.screenTitle}>Exercise Analysis</Text>
        <BookmarkIcon isBookmark={false} />
      </View>

      <TextInput
        placeholder="walk 1 hours, swim 1 hours, cycling 1 km"
        value={exercises}
        multiline={true}
        onChangeText={(text) => {
          setExercises(text);
        }}
        style={styles.textInput}
      />
      {showOpt && (
        <View style={styles.optionsContainer}>
          <View style={styles.field}>
            <Text style={styles.fieldText}> Female</Text>
            <Switch
              onValueChange={(v) => {
                setOptions((prev) => {
                  return { ...prev, gender: v ? "male" : "female" };
                });
              }}
              value={options.gender === "male" ? true : false}
            />
            <Text style={styles.fieldText}>Male </Text>
          </View>

          <View style={styles.field}>
            <Text style={styles.fieldText}> Weight</Text>
            <TextInput style={styles.inputField} />
          </View>
          <View style={styles.field}>
            <Text style={styles.fieldText}> Height</Text>
            <TextInput style={styles.inputField} />
          </View>
          <View style={styles.field}>
            <Text style={styles.fieldText}> Age　</Text>
            <TextInput style={styles.inputField} />
          </View>
        </View>
      )}

      <TouchableOpacity
        onPress={() => {
          setShowOpt(!showOpt);
        }}
        style={styles.optionsButton}
      >
        <Text style={styles.options}>Options + </Text>
      </TouchableOpacity>

      <View style={{ height: 80 }}>
        <ButtonBox title="Analysis" />
      </View>

      <Text
        style={{
          fontSize: 16,
        }}
      >
        List Activities
      </Text>
      <HoriLine />
      <View style={styles.totalContainer}>
        <Text style={{ ...styles.total, color: color.green }}>total: 100</Text>
        <Text style={{ ...styles.total, color: color.orange }}>times: 100</Text>
        <Text style={{ ...styles.total, marginBottom: 20 }}>burned: 100</Text>
      </View>

      <View style={styles.activityContainer}>
        <View>
          <Text style={styles.activityName}>Activity </Text>
          <Text style={styles.activityDuration}>Duration: 10 (min) </Text>
        </View>
        <Text style={styles.activityCalories}>Calories: 10</Text>
      </View>

      <View style={styles.activityContainer}>
        <View>
          <Text style={styles.activityName}>Activity </Text>
          <Text style={styles.activityDuration}>Duration: 10 (min) </Text>
        </View>
        <Text style={styles.activityCalories}>Calories: 10</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  activityContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 5,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: color.aqua,
  },
  activityName: {
    fontSize: 22,
    color: color.green,
    fontWeight: "bold",
    marginBottom: 4,
  },
  activityDuration: {
    fontSize: 18,
    color: color.orange,
    fontWeight: "700",
  },
  activityCalories: {
    fontSize: 18,
    color: color.pink,
    fontWeight: "bold",
  },
  screenTitle: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  total: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    color: color.pink,
    marginVertical: 5,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  caloriesBurned: {},

  options: {
    textAlign: "center",
    color: color.green,
    fontSize: 20,
  },
  optionsButton: {
    paddingVertical: 10,
    backgroundColor: color.orange,
    borderRadius: 20,
    marginVertical: 10,
  },
  textInput: {
    marginVertical: 20,
    height: 200,
    borderWidth: 1,
    borderRadius: 30,
    padding: 20,
    borderColor: color.green,
    borderWidth: 1,
    borderRadius: 30,
  },
  field: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 15,
  },
  fieldText: {
    fontSize: 18,
    fontWeight: "400",
  },
  inputField: {
    height: 40,
    width: "40%",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  bookmarkImg: {
    height: 40,
    width: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  listButton: {
    fontSize: 20,
  },
});

export default ExerciseDetail;

// const mapStateToProps = (state) => {
//   return {
//     region: state.searchState.region,
//     marker: state.searchState.marker,
//     person: state.searchState.person,
//     streetName: state.searchState.streetName,
//     userInfor: state.userState.userInfor,
//   };
// };

// export default connect(mapStateToProps, {
//   regionSearchChange,
//   searchStreet,
// })(ExerciseDetails);
