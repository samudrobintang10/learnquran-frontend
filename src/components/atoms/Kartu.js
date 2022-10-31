import { StyleSheet, Text, View, ScrollView } from "react-native";
import Color from "../../utilities/Color";
import { Card } from 'react-native-paper';
import ButtonSmall from "./ButtonSmall";

export default function Kartu(props) {
  const { onPress, title } = props;
  return (
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.row}>
          <View style={{ justifyContent: 'center' }}>
            <Text style={{ color: 'green', fontSize: 16 }}>Kelas Tajwid</Text>
            <Text style={{ color: 'grey', fontSize: 12 }}>Ustadz Rasyid</Text>
          </View>
          <View>
            <Text style={{ fontSize: 10 }}> <Text style={{ color: 'grey', fontSize: 10 }} >Kuota</Text> 1/10 </Text>
          </View>
          <View>
            <ButtonSmall title={'Kelas Penuh'}></ButtonSmall>
          </View>
        </View>
      </Card.Content>
    </Card>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  card: {
    margin: 4,
    padding: 5,
    elevation: 3
  },
  buttonRed: {
    backgroundColor: "red", 
    borderRadius: 5, 
    color: 'white', 
    padding: 5
  }
});
