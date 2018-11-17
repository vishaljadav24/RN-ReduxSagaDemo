import React from "react";
import { TouchableHighlight, View, Text, StyleSheet } from "react-native";

import { connect } from "react-redux";
import { fetchData,fetchUser } from "./src/store/actions";

let styles;

const App = props => {
  const { container, text, button, buttonText, mainContent } = styles;

  return (
    <View style={container}>
      <Text style={text}>Redux Examples</Text>
      <TouchableHighlight
        style={button}
        onPress={() => {
          props.fetchData();
          props.fetchUser();
        }}
      >
        <Text style={buttonText}>Load Data</Text>
      </TouchableHighlight>
      <View style={mainContent}>
        {props.appData.isFetching && <Text>Loading Data</Text>}
        {props.appData.data.length
          ? props.appData.data.map((person, i) => {
              return (
                <View key={i}>
                  <Text>Name: {person.name}</Text>
                  <Text>Age: {person.age}</Text>
                </View>
              );
            })
          : null}
      </View>
    </View>
  );
};

styles = StyleSheet.create({
  container: {
    marginTop: 100
  },
  text: {
    textAlign: "center"
  },
  button: {
    height: 60,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0b7eff"
  },
  buttonText: {
    color: "white"
  },
  mainContent: {
    margin: 10
  }
});

function mapStateToProps(state) {
  console.log("App state change ",state)
  return {
    appData: state.appData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => dispatch(fetchData()),
    fetchUser: () => dispatch(fetchUser())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
