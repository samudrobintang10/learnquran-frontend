import { StyleSheet, Text, View, ScrollView } from "react-native";
import Color from "../../utilities/Color";
import { Card } from "react-native-paper";
import ButtonSmall from "../atoms/ButtonSmall";
import ButtonOuter from "../atoms/ButtonOuter";
import Gap from "../atoms/Gap";
import Input from "../atoms/Input";

export default function UpdateCardHeader(props) {
  const {
    firstHeader,
    secondHeader,
    nama,
    firstButtonText,
    secondButtonText,
    backgroundColor,
    text,
  } = props;
  return (
    <Card style={styles.card}>
      <Card.Content>
        <ScrollView>
          <Text style={styles.outerText}>Nama Kelas</Text>
          <Gap height={5} />
          <Input
            placeholder={"Nama Kelas..."}
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
              />
            </View>
          </View>

          <Gap height={15} />
          <Text style={styles.outerText}>Tugas 1</Text>
          <Gap height={5} />
          <Input
            placeholder={"Deskripsi Tugas"}
          />
          <Gap height={10} />
          <View style={styles.row2}>
          
            <ButtonSmall title={'Tambah Soal'} TheGreens></ButtonSmall>
          </View>
          <Gap height={10} />
          <View style={styles.row2}>
          
            <ButtonSmall title={'Simpan'} primay></ButtonSmall>
            <Gap width={40} />
            <ButtonSmall style={styles.buttonKecil} title={'  Batal  '} danger></ButtonSmall>
          </View>
        </ScrollView>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  row2: {
    flexDirection: "row",
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
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
    textAlign: "center"
  },
  buttonKecil:{
    width:10,
  }
});
