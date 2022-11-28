import { StyleSheet, Text, View, ScrollView } from "react-native";
import Color from "../../utilities/Color";
import { Card } from "react-native-paper";
import ButtonSmall from "../atoms/ButtonSmall";
import ButtonOuter from "../atoms/ButtonOuter";
import Gap from "../atoms/Gap";
import Input from "../atoms/Input";
import { useState } from "react";
import ClassAPI from "../../services/ClassAPI";
import { useDispatch } from "react-redux";
import { Alert } from "react-native";

export default function Kelas({ name, total_student, handleKelas, handleNamaKelas, handleKapasitas }) {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <ScrollView>
          <Text style={styles.outerText}>Nama Kelas</Text>
          <Gap height={5} />
          <Input
            value={name}
            placeholder={"Nama Kelas..."}
            onChangeText={handleNamaKelas}
          />
          <Gap height={15} />
          <View style={styles.row}>
            <Text style={styles.outerText}>Jumlah Santri</Text>
            <Gap height={5} />
            <Gap width={100} />
            <View style={styles.inputAngka}>
              <Input
                placeholder={"..."}
                keyboardType={"numeric"}
                value={total_student}
                onChangeText={handleKapasitas}
              />
            </View>
          </View>

          <Gap height={25} />
          {/* <Text style={styles.outerText}>Tugas 1</Text>
          <Gap height={5} />
          <Input
            placeholder={"Deskripsi Tugas"}
          />
          <Gap height={10} />
          <View style={styles.row2}>
          
            <ButtonSmall title={'Tambah Soal'} TheGreens></ButtonSmall>
          </View>
          <Gap height={10} /> */}
          <View style={styles.row2}>
            <ButtonSmall title={"Simpan"} primary onPress={handleKelas} />
            <Gap width={40} />
            <ButtonSmall style={styles.buttonKecil} title={"Batal"} danger />
          </View>
        </ScrollView>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  row2: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    margin: 4,
    padding: 5,
    elevation: 3,
    shadowColor: "black",
  },
  innerText: {
    color: Color.solidGreen,
    fontWeight: "bold",
  },
  outerText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  descriptionText: {
    color: Color.lightGray,
    fontSize: 12,
  },
  baseText: {
    color: "grey",
    fontSize: 16,
  },
  inputAngka: {
    width: 75,
    textAlign: "center",
  },
  buttonKecil: {
    width: 10,
  },
});
