import { StyleSheet, Text, View, ScrollView } from "react-native";
import Color from "../../utilities/Color";
import { Card } from "react-native-paper";
import ButtonSmall from "../atoms/ButtonSmall";
import ButtonOuter from "../atoms/ButtonOuter";
import Gap from "../atoms/Gap";

export default function SimpleCardHeader(props) {
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
        <View>
          <View>
            <Text style={styles.baseText}>
              {firstHeader} <Text style={styles.innerText}>{secondHeader}</Text>
            </Text>
            <Text style={styles.outerText}>{nama}</Text>
            <Gap height={30}></Gap>
            <View style={styles.row}>
              <ButtonOuter
                title={firstButtonText}
                backgroundColor={backgroundColor}
                text={text}
              ></ButtonOuter>
              <Gap width={10}></Gap>
              <ButtonSmall title={secondButtonText} danger></ButtonSmall>
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
