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

export default function RecordingCard({
  recordingLine,
  index,
  triggerSubmitRecorder,
  triggerDeleteSubmitRecorder,
  submittedStatus,
}) {
  const [recorderPlaying, setRecorderPlaying] = useState(false);
  const [recordingLineTemp, setRecordingLineTemp] = useState(recordingLine);
  const [submittedRecord, setSubmittedRecord] = useState(submittedStatus);

  const handlePlayingRecord = async (recorderItem) => {
    const record = await recordingLineTemp.sound.replayAsync();
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
          triggerSubmitRecorder(recorderItem);
        },
      },
    ]);
  };

  const handleCancelSubmitRecorder = (recorderItem) => {
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
        <Text style={styles.fill}>
          Recording {index + 1} - {recordingLine.duration}
        </Text>
        <Gap height={20} />
        <View style={styles.player}>
          {!recorderPlaying && (
            <Button
              title={
                <FontAwesomeIcon
                  icon={faRotate}
                  size={24}
                  color={Color.white}
                />
              }
              onPress={() => handlePlayingRecord(recordingLineTemp)}
            />
          )}
          <Gap width={20} />
          {!submittedStatus && (
            <Button
              fivedary
              title={
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  size={24}
                  color={Color.white}
                />
              }
              onPress={() => handleSubmitRecorder(recordingLineTemp)}
            />
          )}
          {submittedStatus && (
            <Button
              fouthdary
              title={
                <FontAwesomeIcon icon={faTrash} size={24} color={Color.white} />
              }
              onPress={() => handleCancelSubmitRecorder(recordingLineTemp)}
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
