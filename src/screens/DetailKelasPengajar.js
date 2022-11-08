import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Button from "../components/atoms/Button";
import Gap from "../components/atoms/Gap";
import KartuProfile from "../components/atoms/KartuProfile";
import KartuDetail from "../components/atoms/KartuDetail";
import Color from "../utilities/Color";
import ButtonSmall from "../components/atoms/ButtonSmall";
import ButtonOuter from "../components/atoms/ButtonOuter";
import SimpleCardHeader from "../components/molecules/SimpleCardHeader";
import UpdateCardHeader from "../components/molecules/ClassCard";
import BackHeader from "../components/molecules/BackHeader";

export default function BuatKelas({ navigation }) {
  return (
    <View style={styles.container}>
      <BackHeader 
      onPress={() => navigation.goBack()} 
      judul ={'Buat Kelas'}>
      </BackHeader>
      <Gap height={20} />
      <ScrollView style={styles.content}>
      <View style={styles.row}>
          
          <ButtonOuter title={'Edit Kelas'} backgroundColor={Color.solidGreen}
          text={Color.solidGreen}></ButtonOuter>
          <Gap width={20} />
          <ButtonSmall style={styles.buttonKecil} title={'Hapus Kelas'} danger></ButtonSmall>
        </View>
        <Gap height={20}></Gap>
        <Text>Daftar Soal</Text>
        <Gap height={20}></Gap>
        <KartuDetail
         judul={"Soal 1"}
         deskripsi={"Membaca Surat Al-Fatihah ayat 1 - 5"}></KartuDetail>
        <Gap height={20}></Gap>
        <Text>Daftar Pembelajar</Text>
        <Gap height={20}></Gap>
        <KartuDetail
        judul={"Bintang Samudro"}
    
        onPress={() => navigation.navigate("DetailPembelajar")}></KartuDetail>
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
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
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
});
