import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import Color from "../../utilities/Color";
import { Card } from "react-native-paper";
import ButtonSmall from "./ButtonSmall";
import Gap from "./Gap";
import Button from "./Button";
import { useState } from "react";
// import ReactPlayer from 'react-player'

export default function KartuSoal(props) {
  const { judul, header, deskripsi, onPress } = props;

  const [recordAudio, setRecordAudio] = useState(false);
  const handleRecording = () => {
    onPress();
    setRecordAudio(!recordAudio);
  };

  return (
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.row}>
          <View style={{ justifyContent: "center" }}>
            <Text style={styles.baseText}>{judul}</Text>
            <Gap height={10} />
            <Text style={styles.headerText}>{header}</Text>
            <Text style={styles.secondaryText}>{deskripsi}</Text>
          </View>
          {!recordAudio && (
            <Button title={"Record"} onPress={() => handleRecording()} />
          )}
          {recordAudio && (
            <Button
              title={"Stop"}
              secondary
              onPress={() => handleRecording()}
            />
          )}
        </View>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  card: {
    margin: 1,
    padding: 1,
    elevation: 3,
    shadowColor: "black",
  },
  buttonRed: {
    backgroundColor: "red",
    borderRadius: 5,
    color: "white",
    padding: 5,
  },
  baseText: {
    color: "green",
    fontSize: 16,
    fontWeight: "600",
  },
  secondaryText: {
    color: "grey",
    fontSize: 12,
    fontWeight: "600",
  },
  headerText: {
    color: "black",
    fontSize: 14,
    fontWeight: "600",
  },
});
