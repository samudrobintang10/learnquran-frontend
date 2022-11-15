import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Alert } from "react-native";
import Button from "../components/atoms/Button";
import Gap from "../components/atoms/Gap";
import KartuProfile from "../components/atoms/KartuProfile";
import KartuDetail from "../components/atoms/KartuDetail";
import Color from "../utilities/Color";
import ButtonRed from "../components/atoms/ButtonSmall";
import SimpleCardHeader from "../components/molecules/SimpleCardHeader";
import KartuSoal from "../components/atoms/KartuSoal";
import ReactPlayer from "react-player";
import Kartu from "../components/atoms/Kartu";
import BackHeader from "../components/molecules/BackHeader";
import { Audio } from "expo-av";
import RecordingCard from "../components/molecules/RecordingCard";


export default function DetailSoal({ navigation }) {
  const [recording, setRecording] = useState();
  const [recordings, setRecordings] = useState([]);
  const [message, setMessage] = useState("");

  const triggerSubmitRecorder = async (item) => {
    const uri = item.file;
    let uriParts = uri.split(".");
    let fileType = uriParts[uriParts.length - 1];

    let formData = new FormData();
    formData.append("file", {
      uri,
      name: `recording.${fileType}`,
      type: `audio/x-${fileType}`,
    });
    item.submitted = true
    setRecordings([item]);

    // await axios.post(
    //   `${process.env.API_URL}/submission/upload/` + id,
    //   formData,
    //   { headers: { apiKey: process.env.API_KEY } }
    // );

    console.log(formData);
  };

  const triggerDeleteSubmitRecorder = async (item) => {
    setRecordings([]);
  };

  async function startRecording() {
    try {
      const permission = await Audio.requestPermissionsAsync();
      if (permission.status === "granted") {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });

        const { recording } = await Audio.Recording.createAsync(
          Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
        );
        setRecording(recording);
      } else {
        setMessage("Please grant permission to app to access microphone");
      }
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    setRecording(undefined);
    await recording.stopAndUnloadAsync();

    let updatedRecordings = [...recordings];
    const { sound, status } = await recording.createNewLoadedSoundAsync();
    updatedRecordings.push({
      sound: sound,
      duration: getDurationFormatted(status.durationMillis),
      file: recording.getURI(),
      submitted: false
    });

    setRecordings(updatedRecordings);
  }

  function getDurationFormatted(millis) {
    const minutes = millis / 1000 / 60;
    const minutesDisplay = Math.floor(minutes);
    const seconds = Math.round((minutes - minutesDisplay) * 60);
    const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutesDisplay}:${secondsDisplay}`;
  }

  function getRecordingLines() {
    return recordings.map((recordingLine, index) => {
      return (
        <RecordingCard
          recordingLine={recordingLine}
          index={index}
          triggerSubmitRecorder={triggerSubmitRecorder}
          triggerDeleteSubmitRecorder={triggerDeleteSubmitRecorder}
          submittedStatus={recordingLine.submitted}
        />
      );
    });
  }

  return (
    <View style={styles.container}>
      <BackHeader onPress={() => navigation.goBack()} judul={"Detail Soal 1"} />
      <Gap height={20} />
      <View style={styles.content}>
        <KartuSoal
          judul={"Soal 1"}
          header={"Al-Fatihah"}
          deskripsi={"Ayat 1-5"}
          onPress={recording ? stopRecording : startRecording}
        />
      </View>
      <ScrollView style={styles.content}>{getRecordingLines()}</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  content: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  row: {
    justifyContent: "center",
    backgroundColor: Color.lightGreen,
    borderRadius: 10,
    padding: 15,
  },
  player: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  fill: {
    flex: 1,
  },
  button: {
    margin: 16,
  },
});
