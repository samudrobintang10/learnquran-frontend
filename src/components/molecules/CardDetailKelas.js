import { StyleSheet, Text, View, ScrollView } from "react-native";
import Color from "../../utilities/Color";
import { Card } from "react-native-paper";
import ButtonSmall from "../atoms/ButtonSmall";
import ButtonOuter from "../atoms/ButtonOuter";
import Gap from "../atoms/Gap";

export default function CardDetailKelas(props) {
  const {
    nama,
    backgroundColor,
    text,
    enrolled,
    handleEnrollKelas,
    handleUnenrollKelas,
  } = props;
  return (
    <Card style={styles.card}>
      <Card.Content>
        <View>
          <View>
            <Text style={styles.outerText}>{nama}</Text>
            <Gap height={30}></Gap>
            <View style={styles.row}>
              {!enrolled && (
                <ButtonSmall
                  title={"Daftar Kelas"}
                  onPress={handleEnrollKelas}
                />
              )}
              {enrolled && (
                <>
                  <ButtonOuter
                    title={"Kelas diikuti"}
                    backgroundColor={backgroundColor}
                    text={text}
                  />
                  <Gap width={10} />
                  <ButtonSmall
                    title={"Keluar Kelas"}
                    danger
                    onPress={handleUnenrollKelas}
                  />
                </>
              )}
            </View>
          </View>
        </View>
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
    fontWeight: "Bold",
    fontSize: 24,
  },
  descriptionText: {
    color: Color.lightGray,
    fontSize: 12,
  },
  baseText: {
    color: "grey",
    fontSize: 16,
  },
});
