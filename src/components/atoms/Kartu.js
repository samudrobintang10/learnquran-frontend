import { StyleSheet, Text, View, ScrollView } from "react-native";
import Color from "../../utilities/Color";
import { Card } from "react-native-paper";
import ButtonSmall from "./ButtonSmall";
import Gap from "./Gap";

export default function Kartu(props) {
  const { onPress, title, id, teacher_name, total_student, capacity } = props;
  return (
    <Card style={styles.card} key={id}>
      <Card.Content>
        <View style={styles.row}>
          <View style={{ justifyContent: "center" }}>
            <Text style={{ color: "green", fontSize: 16, width: 160 }}>
              {title}
            </Text>
            <Text style={{ color: "grey", fontSize: 12, width: 160 }}>
              {teacher_name}
            </Text>
          </View>
          <View>
            <ButtonSmall
              title={total_student <= capacity ? "Daftar Kelas" : "Kelas Penuh"}
              danger={total_student <= capacity ? false : true}
              onPress={onPress}
            />
            <Gap height={10} />
            <View>
              <Text style={{ fontSize: 12, textAlign: "right" }}>
                Kuota {total_student} / {capacity}
              </Text>
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
    justifyContent: "space-between",
    alignItems: "center",
  },
  card: {
    margin: 4,
    padding: 5,
    elevation: 3,
  },
  buttonRed: {
    backgroundColor: "red",
    borderRadius: 5,
    color: "white",
    padding: 5,
  },
});
