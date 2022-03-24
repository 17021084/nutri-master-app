import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { connect } from "react-redux";
import ButtonBox from "../../../components/common/ButtonBox";
import { logOut } from "../../../redux/actions";

function UserDetails({ bookmarkList, navigation, logOut }) {
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <View style={styles.userInfo}>
          <Text style={styles.fieldTitle}>Email</Text>
          <TextInput style={styles.inputField} value={"asds"} />
        </View>

        <View style={styles.userInfo}>
          <Text style={styles.fieldTitle}>Gender</Text>
          <TextInput style={styles.inputField} value={"asds"} />
        </View>

        <View style={styles.userInfo}>
          <Text style={styles.fieldTitle}>Weight: (kg)</Text>
          <TextInput style={styles.inputField} value={"asds"} />
        </View>

        <View style={styles.userInfo}>
          <Text style={styles.fieldTitle}>Height: (cm)</Text>
          <TextInput style={styles.inputField} value={"asds"} />
        </View>

        <View style={styles.userInfo}>
          <Text style={styles.fieldTitle}>Age: </Text>
          <TextInput style={styles.inputField} value={"asds"} />
        </View>

        <View style={styles.buttonBox}>
          <ButtonBox title="Save" onPress={logOut} />
        </View>
        <View style={styles.buttonBox}>
          <ButtonBox title="Log out" onPress={logOut} />
        </View>
      </View>
    </View>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    bookmarkList: state.userState.bookmark,
  };
};
export default connect(mapStateToProps, { logOut })(UserDetails);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  userContainer: {
    flex: 2,
    paddingHorizontal: 20,
  },
  userInfo: {
    flex: 2,
    marginVertical: 5,
  },
  buttonBox: {
    height: 75,
  },
  fieldTitle: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "700",
  },
  inputField: {
    height: 40,
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 5,
  },
});
