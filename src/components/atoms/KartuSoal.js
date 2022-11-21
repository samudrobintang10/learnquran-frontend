import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import Color from "../../utilities/Color";
import { Card } from "react-native-paper";
import ButtonSmall from "./ButtonSmall";
import Gap from "./Gap";
import Button from "./Button";
import { useState } from "react";
// import ReactPlayer from 'react-player'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMicrophoneAlt, faMicrophoneAltSlash } from "@fortawesome/free-solid-svg-icons";

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
          <View style={{ justifyContent: "center", width: 190 }}>
            <Text style={styles.baseText}>{judul}</Text>
            <Gap height={10} />
            <Text style={styles.headerText}>{header}</Text>
            <Text style={styles.secondaryText}>{deskripsi}</Text>
          </View>
          {!recordAudio && (
            <Pressable
              style={styles.startMicrophone}
              onPress={() => handleRecording()}
            >
              <FontAwesomeIcon
                icon={faMicrophoneAlt}
                size={24}
                color={Color.white}
              />
            </Pressable>
          )}
          {recordAudio && (
            <Pressable
            style={styles.stopMicrophone}
            onPress={() => handleRecording()}
          >
            <FontAwesomeIcon
              icon={faMicrophoneAltSlash}
              size={24}
              color={Color.solidGreen}
            />
          </Pressable>
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
  startMicrophone: {
    backgroundColor: Color.solidGreen,
    width: 50,
    height: 50,
    marginRight: 8,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  stopMicrophone: {
    backgroundColor: Color.white,
    borderColor: Color.solidGreen,
    borderWidth: 2,
    width: 50,
    height: 50,
    marginRight: 8,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
