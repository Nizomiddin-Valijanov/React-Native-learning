import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Pressable,
  SafeAreaView,
  TextInput,
} from "react-native";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);

  const salom = () => {
    Alert.alert("Nizomiddin", "Second", [{ text: "yes" }, { text: "No" }]);
    alert("salom");
  };

  const consoleAlert = () => {
    Alert.alert("Confirmation", "Do you okay?", [
      { text: "Yes", onPress: () => alert("good") },
      { text: "No", onPress: () => alert("bad") },
    ]);
  };

  const handleInput = (value) => {
    setInputValue(value);
  };

  const handleSubmit = () => {
    setData([...data, inputValue]);
    setInputValue(""); // Clear input after submission
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text} onPress={salom}>
        hello app!
      </Text>
      <Pressable title="Click me!" onPress={consoleAlert} style={styles.button}>
        <Text style={styles.text_center}>Press Me!</Text>
      </Pressable>
      <View style={styles.box_item}>
        <Text style={styles.box}>1</Text>
        <Text style={styles.box}>2</Text>
        <Text style={styles.box}>3</Text>
        <Text style={styles.box}>4</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          onChangeText={handleInput}
          placeholder="Enter something"
          value={inputValue}
        />

        <Pressable style={styles.submit} onPress={handleSubmit}>
          <Text>Submit</Text>
        </Pressable>
      </View>

      <View>
        {data?.map((el, index) => {
          return <Text key={index}>{el}</Text>;
        })}
      </View>
      <Pressable>
        <Text>To Form Page</Text>
      </Pressable>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },

  text: {
    color: "white",
    backgroundColor: "green",
    borderRadius: 75, // Adjusted from "50%" to 75
    width: 150,
    height: 150,
    marginBottom: 100,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  button: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
  },

  box_item: {
    flexDirection: "row",
    height: 100,
    gap: 10,
    justifyContent: "center",
    marginTop: 30,
  },

  box: {
    width: 60,
    height: 60,
    backgroundColor: "silver",
    borderWidth: 3,
    borderColor: "yellow",
    borderStyle: "solid",
    borderRadius: 10,
    textAlign: "center",
    color: "blue",
  },
  input: {
    backgroundColor: "white",
    shadowColor: "#000",
    height: 30,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.11,
    shadowRadius: 9.11,
    elevation: 14,
    padding: 10,
    borderRadius: 7,
  },
  form: {
    flex: 1,
    gap: 10,
    justifyContent: "center",
    flexDirection: "row",
    height: "auto",
  },
  submit: {
    backgroundColor: "aqua",
    height: 30,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 10,
  },
});
