import { StyleSheet, View, Text } from "react-native";
import Color from "../../utilities/Color";
import Gap from "../atoms/Gap";
import Button from "../atoms/Button";
import { useState } from "react";
import { Audio } from "expo-av";
import { Alert } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faTrash,
  faRotate,
  faTrashAlt,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import ButtonIcon from "../atoms/ButtonIcon";
import SoundPlayer from "react-native-sound-player";

export default function RecordingCard({
  recordingLine,
  index,
  triggerSubmitRecorder,
  triggerDeleteSubmitRecorder,
  submittedStatus,
  idSubmission,
  detailSubmission
}) {
  const [recorderPlaying, setRecorderPlaying] = useState(false);

  const [recordingLineTemp, setRecordingLineTemp] = useState(recordingLine);
  const [submittedRecord, setSubmittedRecord] = useState(submittedStatus);

  const handlePlayingRecord = async (recorderItem) => {
    if (detailSubmission?.audio_file) {
      const audioUrl = detailSubmission.audio_file_url[0];
      const sound = new Audio.Sound();
      await sound.loadAsync({
        uri: audioUrl,
      });
      await sound.playAsync();
    } else {
      const record = await recorderItem.sound.replayAsync();
    }
  };

  const handleSubmitRecorder = (recorderItem) => {
    Alert.alert("Submit Recording", "Yakin anda ingin mensubmit rekaman ini?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          setSubmittedRecord(true);
          triggerSubmitRecorder(recorderItem, idSubmission);
        },
      },
    ]);
  };

  const handleDeleteSubmitRecorder = (recorderItem) => {
    Alert.alert("Submit Recording", "Yakin anda ingin menghapus rekaman ini?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          setSubmittedRecord(false);
          triggerDeleteSubmitRecorder(recorderItem);
        },
      },
    ]);
  };

  return (
    <>
      <Gap height={20} />
      <View key={index} style={styles.row}>
        {recordingLine && (
          <Text style={styles.fill}>
            Recording {index + 1} - {recordingLine.duration}
          </Text>
        )}
        {detailSubmission?.audio_file && (
          <Text>
            {detailSubmission.audio_file}{" "}
            {detailSubmission.duration && " - " + detailSubmission.duration}
          </Text>
        )}
        <Gap height={20} />
        <View style={styles.player}>
          {!recorderPlaying && (
            <ButtonIcon
              title={
                <FontAwesomeIcon
                  icon={faRotate}
                  size={20}
                  color={Color.white}
                />
              }
              onPress={() => handlePlayingRecord(recordingLineTemp)}
            />
          )}
          <Gap width={10} />
          {!submittedStatus && (
            <ButtonIcon
              fivedary
              title={
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  size={20}
                  color={Color.white}
                />
              }
              onPress={() => handleSubmitRecorder(recordingLineTemp)}
            />
          )}
          {submittedStatus && triggerDeleteSubmitRecorder && (
            <ButtonIcon
              fouthdary
              title={
                <FontAwesomeIcon icon={faTrash} size={20} color={Color.white} />
              }
              onPress={() => handleDeleteSubmitRecorder(detailSubmission.id)}
            />
          )}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    justifyContent: "center",
    backgroundColor: Color.lightGreen,
    borderRadius: 10,
    padding: 15,
  },
  player: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  fill: {
    flex: 1,
  },
  button: {
    margin: 16,
  },
});
