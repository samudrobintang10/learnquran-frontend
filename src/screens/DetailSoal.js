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
import { useEffect } from "react";
import TaskAPI from "../services/TaskAPI";
import { useDispatch } from "react-redux";
import { getValueFor } from "../utilities/secureStorage";
import SubmissionAPI from "../services/SubmissionAPI";

export default function DetailSoal({ navigation, route }) {
  const { idTask, idStudent } = route.params;
  const dispatch = useDispatch();

  const [recording, setRecording] = useState();
  const [recordings, setRecordings] = useState([]);
  const [message, setMessage] = useState("");

  const triggerSubmitRecorder = async (item, idTaskSubmit) => {
    const uri = item.file;
    let uriParts = uri.split(".");
    let fileType = uriParts[uriParts.length - 1];

    let formData = new FormData();
    formData.append("file", {
      uri: uri,
      name: `recording.${fileType}`,
      type: `audio/x-${fileType}`,
    });
    formData.append("duration", {
      length: item.duration,
    });
    item.submitted = true;
    setRecordings([]);

    SubmissionAPI.submitRecording(formData, idTaskSubmit)
      .then((response) => {
        navigation.replace("DetailSoal", {
          idTask: idTask,
          idStudent: idStudent,
        });
      })
      .catch((error) => console.log(error));    

    setDetailTask({});
    getDetailTask(idTask, idStudent);
  };

  const triggerDeleteSubmitRecorder = async (item) => {
    setRecordings([]);
  };

  const [detailTask, setDetailTask] = useState({});
  const [detailSubmission, setDetailSubmission] = useState({});
  const getDetailTask = async (id, id_student) => {
    dispatch({ type: "SET_LOADING", value: true });
    try {
      const { data: response } = await TaskAPI.getTask(id, id_student);
      setDetailTask(response?.results?.data?.task);
      setDetailSubmission(response?.results?.data?.submission);
      dispatch({ type: "SET_LOADING", value: false });
    } catch (error) {
      console.log(error);
      dispatch({ type: "SET_LOADING", value: false });
    }
  };
  console.log(
    detailSubmission?.audio_file ? detailSubmission?.audio_file[0] : false
  );

  async function startRecording() {
    try {
      const permission = await Audio.requestPermissionsAsync();
      if (permission.status === "granted") {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });

        const { recording } = await Audio.Recording.createAsync(
          Audio.RecordingOptionsPresets.HIGH_QUALITY
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
      submitted: false,
    });

    setRecordings(updatedRecordings);
  }

  useEffect(() => {
    setDetailTask({});
    getDetailTask(idTask, idStudent);
  }, [idTask, idStudent]);

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
          idTask={idTask}
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
          judul={detailTask.name}
          header={detailTask.description}
          onPress={recording ? stopRecording : startRecording}
        />
      </View>
      <Gap height={20} />
      {detailSubmission.audio_file && (
        <>
          <View style={styles.content}>
            <Text style={styles.recordTitling}>Submitted Record</Text>
          </View>
          <View style={styles.content}>
            <RecordingCard
              detailSubmission={detailSubmission}
              audioFile={detailSubmission.audio_file}
              triggerDeleteSubmitRecorder={triggerDeleteSubmitRecorder}
              submittedStatus={true}
              idTask={idTask}
            />
          </View>
        </>
      )}

      <Gap height={20} />
      {recordings.length > 0 && (
        <View style={styles.content}>
          <Text style={styles.recordTitling}>New Record</Text>
        </View>
      )}
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
  recordTitling: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000",
    paddingLeft: 10,
  },
});
