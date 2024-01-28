import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, Button, Alert } from "react-native";

let helo = 0;
function salom() {
  // helo++;
  // console.log(typeof helo === "number");
  Alert.alert("Nizomiddin", "Second", [{ text: "yes" }, { text: "No" }]);
  alert("salom");
}

function consoleAlert() {
  if (confirm("Do you okay?")) {
    alert("good");
  } else {
    alert("bad");
  }
}
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text} onPress={salom}>
        hello app!
      </Text>
      <Button title="Click me!" onPress={consoleAlert} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    width: "100%",
    flex: 1,
    alignContent: "center",
  },

  text: {
    color: "white",
    backgroundColor: "green",
    paddingVertical: "20px",
    textAlign: "center",
  },
});
