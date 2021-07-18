import React from "react";
import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.carContainer}>
        <ImageBackground
          source={require("../../assets/Mache2.jpg")}
          style={styles.imageBg}
        />
        <View style={styles.titles}>
          <Text style={styles.title}>My Mach-E</Text>
          <Text style={styles.subtitles}>Ford Pass</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  carContainer: {
    width: "100%",
    height: "100%",
  },
  titles: {
    marginTop: "20%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#141212",
  },
  subtitles: {
    fontSize: 16,
    color: "#d3d3d3",
  },
  imageBg: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
});
