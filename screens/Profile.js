import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }
  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
    return (
      <View style={this.state.light_theme, styles.containerLight, styles.container}>
        <TouchableOpacity style={styles.button} 
        onPress = {()=>this.signInWithGoogleAsync()}>
          <image source={require("../assets/google_icon.png")} style={styles.googleIcon}/> 
        </TouchableOpacity>
        <Text>Profile</Text>
      </View>
    );
  }
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'dark'
  },
  containerLight: {
    flex: 1,
    backgroundColor:'white' 
  }
});
