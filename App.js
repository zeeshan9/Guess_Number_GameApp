import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./Components/Header";
import { StartGameScreen } from "./Screen/StartGameScreen";
import { GameScreen } from "./Screen/GameScreen.";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const StartGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGameScreen onStartGame={StartGameHandler} />;

  if (userNumber) {
    content = <GameScreen userChoice={userNumber} />;
  }

  return (
    <View style={styles.screen}>
      <Header title='Guess A Number' />
      {content}
      {/* <GameScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
});
