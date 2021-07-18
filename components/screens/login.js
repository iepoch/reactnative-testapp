import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { TextInput, Title, Subheading, Button } from "react-native-paper";
export const LoginScreen = ({ navigation }) => {
  const [text, setText] = React.useState("");
  return (
    <View style={styles.container}>
      <View style={styles.titles}>
        <Image
          style={styles.image}
          source={require("../../assets/logo_size.jpg")}
        />
        <Title style={styles.title}>SIGN IN</Title>
        <Subheading style={styles.subtitle}>
          If you have a Fjord or Lokil account,
          {"\n"}enter you username and password
          {"\n"}here.
        </Subheading>
        <TextInput
          style={styles.inputBox}
          label={"Email or Username"}
          value={text}
          mode="outlined"
          outlineColor="#02386d"
          theme={{
            colors: { primary: "#02386d", underlineColor: "transparent" },
          }}
          onChangeText={(text) => setText(text)}
        />
        <TextInput
          style={styles.inputBox}
          label={"Password"}
          value={text}
          mode="outlined"
          outlineColor="#02386d"
          secureTextEntry
          theme={{
            colors: { primary: "#02386d", underlineColor: "transparent" },
          }}
          onChangeText={(text) => setText(text)}
        />

        <Button
          mode="contained"
          color="#02386d"
          style={styles.signinBtn}
          onPress={() => navigation.navigate("Home")}
        >
          Sign In
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2f4f5",
    // alignItems: "center",
    // justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "30%",
  },
  inputBox: {
    width: "90%",
    marginTop: "9%",
    height: 38,
  },
  titles: {
    marginTop: "10%",
    width: "100%",
    paddingBottom: 50,
    alignItems: "center",
  },
  title: {
    marginTop: "15%",
    fontSize: 18,
    color: "#141212",
    fontWeight: 300,
  },
  subtitle: {
    marginTop: "5%",
    fontSize: 13,
    multline: "true",
  },
  signinBtn: {
    borderRadius: 25,
    marginTop: "15%",
    width: "25%",
  },
});
