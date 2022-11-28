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

export default function EditSoal({ navigation, route }) {
  const dispatch = useDispatch();
  const { idClass, idTask, name, description } = route.params;
  const [namaSoal, setNamaSoal] = useState(name);
  const [deskripsi, setDeskripsi] = useState(description);

  const handleEditSoal = async () => {
    dispatch({ type: "SET_LOADING", value: true });
    TaskAPI.editTask(idTask, namaSoal, deskripsi)
      .then((response) => {
        dispatch({ type: "SET_LOADING", value: false });
        Alert.alert(
          "Berhasil Mengubah Soal",
          "Anda berhasil mengubah soal!",
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
        dispatch({ type: "SET_LOADING", value: false });
        Alert.alert(error.message);
      });
  };

  const handleHapusSoal = async () => {
    dispatch({ type: "SET_LOADING", value: true });
    TaskAPI.deleteTask(idClass, idTask)
      .then((response) => {
        dispatch({ type: "SET_LOADING", value: false });
        Alert.alert(
          "Berhasil Menghapus Soal",
          "Anda berhasil menghapus soal!",
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
        dispatch({ type: "SET_LOADING", value: false });
        console.log(error)
        Alert.alert(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <BackHeader onPress={() => navigation.goBack()} judul={"Edit Soal"} />
      <Gap height={20} />

      <ScrollView style={styles.content}>
        <Card style={styles.card}>
          <Card.Content>
            <View style={styles.row}>
              <ButtonSmall
                style={styles.buttonKecil}
                title={"Hapus Soal"}
                danger
                onPress={handleHapusSoal}
              />
            </View>
            <Gap height={15} />
            <ScrollView>
              <Text style={styles.outerText}>Edit Soal</Text>
              <Gap height={5} />
              <Input
                placeholder={"Nama Soal..."}
                onChangeText={(text) => setNamaSoal(text)}
                value={namaSoal}
              />
              <Gap height={15} />
              <Text style={styles.outerText}>Deskripsi</Text>
              <Gap height={5} />
              <Input
                placeholder={"Deskripsi Soal..."}
                onChangeText={(text) => setDeskripsi(text)}
                multiline
                value={deskripsi}
              />
              <Gap height={25} />
              <View style={styles.row2}>
                <ButtonSmall
                  title={"Simpan"}
                  primary
                  onPress={handleEditSoal}
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
  firstrow: {
    backgroundColor: Color.solidGreen,
    justifyContent: "center",
    alignItems: "center",
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    height: 100,
  },
  card: {
    margin: 4,
    padding: 5,
    elevation: 3,
    shadowColor: "black",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
