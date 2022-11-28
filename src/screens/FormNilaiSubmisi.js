import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Button from "../components/atoms/Button";
import Gap from "../components/atoms/Gap";
import Color from "../utilities/Color";
import Kelas from "../components/molecules/Kelas";
import BackHeader from "../components/molecules/BackHeader";
import { useDispatch } from "react-redux";
import ClassAPI from "../services/ClassAPI";
import { Alert } from "react-native";
import { useState } from "react";
import { Card } from "react-native-paper";
import Input from "../components/atoms/Input";
import ButtonSmall from "../components/atoms/ButtonSmall";
import TaskAPI from "../services/TaskAPI";
import { useEffect } from "react";
import SubmissionAPI from "../services/SubmissionAPI";
import RecordingCard from "../components/molecules/RecordingCard";

export default function FormNilaiSubmisi({ navigation, route }) {
  const dispatch = useDispatch();
  const { idTask, idStudent } = route.params;
  const [nilai, setNilai] = useState();
  const [feedback, setFeedback] = useState();

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

  const handleScore = async (idSubmission, score, feedback) => {
    dispatch({ type: "SET_LOADING", value: true });
    SubmissionAPI.scoreSubmission(idSubmission, parseInt(score), feedback)
      .then((response) => {
        dispatch({ type: "SET_LOADING", value: false });
        Alert.alert(
          "Anda berhasil menilai",
          "Anda telah menilai tugas pembelajar",
          [
            {
              text: "OK",
              onPress: () => {
                navigation.goBack();
              },
            },
          ]
        );
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: "SET_LOADING", value: false });
      });
  };

  useEffect(() => {
    setDetailTask({});
    getDetailTask(idTask, idStudent);
  }, [idTask, idStudent]);

  return (
    <View style={styles.container}>
      <BackHeader
        onPress={() => navigation.goBack()}
        judul={"Nilai Pembelajar"}
      />
      <Gap height={20} />
      <ScrollView style={styles.content}>
        <Card style={styles.card}>
          <Card.Content>
            <View style={{ justifyContent: "center", width: 190 }}>
              <Text style={styles.baseText}>{detailTask.name}</Text>
              <Gap height={10} />
              <Text style={styles.secondaryText}>{detailTask.description}</Text>
            </View>
            <Gap height={20} />
            {detailSubmission.audio_file && (
              <>
                <View>
                  <Text style={styles.recordTitling}>Submitted Record</Text>
                </View>
                <View>
                  <RecordingCard
                    detailSubmission={detailSubmission}
                    submittedStatus={true}
                  />
                </View>
              </>
            )}
            <Gap height={20} />
            <ScrollView>
              <View style={styles.row}>
                <Text style={styles.outerText}>Beri Nilai</Text>
                <Gap width={15} />
                <View style={styles.inputAngka}>
                  <Input
                    placeholder={"..."}
                    keyboardType={"numeric"}
                    onChangeText={(num) => setNilai(num)}
                  />
                </View>
              </View>
              <Gap height={15} />
              <Text style={styles.outerText}>Feedback</Text>
              <Gap height={5} />
              <Input
                placeholder={"Feedback Soal..."}
                multiline
                onChangeText={(text) => setFeedback(text)}
              />
              <Gap height={25} />
              <View style={styles.row2}>
                <ButtonSmall
                  title={"Simpan"}
                  primary
                  onPress={() =>
                    handleScore(detailSubmission.id, nilai, feedback)
                  }
                />
                <Gap width={40} />
                <ButtonSmall
                  style={styles.buttonKecil}
                  title={"Batal"}
                  danger
                />
              </View>
            </ScrollView>
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  content: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  baseText: {
    fontSize: 20,
    fontWeight: "500",
    color: "#fff",
  },
  row2: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  baseText2: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000",
    paddingLeft: 10,
  },
  card: {
    margin: 4,
    padding: 5,
    elevation: 3,
    shadowColor: "black",
  },
  firstrow: {
    backgroundColor: Color.solidGreen,
    justifyContent: "center",
    alignItems: "center",
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    height: 100,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  recordTitling: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
  },
  baseText: {
    color: "green",
    fontSize: 16,
    fontWeight: "600",
  },
  secondaryText: {
    color: "grey",
    fontSize: 14,
    fontWeight: "600",
  },
});
