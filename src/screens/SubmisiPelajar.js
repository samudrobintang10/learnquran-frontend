import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Button from "../components/atoms/Button";
import ButtonSmall from "../components/atoms/ButtonSmall";
import Gap from "../components/atoms/Gap";
import Kartu from "../components/atoms/Kartu";
import KartuDetail from "../components/atoms/KartuDetail";
import BackHeader from "../components/molecules/BackHeader";
import Color from "../utilities/Color";
import { useState, useEffect } from "react";
import ClassAPI from "../services/ClassAPI";
import TaskAPI from "../services/TaskAPI";

export default function SubmisiPelajar({ navigation, route }) {
  const { idStudent, idClass } = route.params;
  const [allTaskByStudentInClass, setAllTaskByStudentInClass] = useState([]);
  const getAllTaskByStudentInClass = async () => {
    try {
      const { data: response } = await TaskAPI.getAllStudentTaskByClass(
        idStudent,
        idClass
      );
      setAllTaskByStudentInClass(response?.results?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setAllTaskByStudentInClass([]);
      getAllTaskByStudentInClass();
    });

    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <BackHeader
        onPress={() => navigation.goBack()}
        judul={"Detail Submisi"}
      />
      <Gap height={10} />
      <ScrollView style={styles.content}>
        {allTaskByStudentInClass.map((item) => {
          return (
            <>
              <KartuDetail
                judul={item?.name}
                deskripsi={item?.teacher_name}
                onPress={() => {
                  if (item?.Submissions[0].status === "Sudah submit") {
                    navigation.navigate("FormNilaiSubmisi", {
                      idTask: item.id,
                      idStudent: idStudent,
                    });
                  } else if (item?.Submissions[0].status === "Telah dinilai") {
                    navigation.navigate("DetailNilaiSubmisi", {
                      idTask: item.id,
                      idStudent: idStudent,
                    });
                  } else {
                    console.log("BELUM SUBMIT");
                  }
                }}
                secondary={item?.Submissions[0].status === "Sudah submit"}
                red={item?.Submissions[0].status === "Belum submit"}
                green={item?.Submissions[0].status === "Telah dinilai"}
                buttonName={item?.Submissions[0].status}
              />
              <Gap height={10} />
            </>
          );
        })}
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
  content2: {
    alignItems: "flex-end",
    paddingLeft: 16,
    paddingRight: 16,
  },
  baseText: {
    fontSize: 24,
    fontWeight: "600",
    color: "#fff",
  },
  firstrow: {
    flex: 0.125,
    backgroundColor: Color.solidGreen,
    justifyContent: "center",
    alignItems: "center",
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
  },
});
