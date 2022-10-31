import { StyleSheet, Text, View, Image } from "react-native";
import Color from "../../utilities/Color";
import { Card } from 'react-native-paper';
import ButtonSmall from "./ButtonSmall";
// import ReactPlayer from 'react-player'

export default function KartuSoal(props) {
  const { judul, header, deskripsi } = props;
  return (
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.row}>
          <View style={{ justifyContent: 'center' }}>
            <Text style={styles.baseText}>{judul}</Text>
            <Text style={styles.headerText}>{header}</Text>
            <Text style={styles.secondaryText}>{deskripsi}</Text>
          </View>
         
          {/* <View>
            <Image source={require('../../../assets/mic1.png')}></Image>
          </View> */}
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
    margin: 1,
    padding: 1,
    elevation: 3,
    shadowColor: 'black'  
  },
  buttonRed: {
    backgroundColor: "red", 
    borderRadius: 5, 
    color: 'white', 
    padding: 5
  },
  baseText: {
    color: 'green', fontSize: 16 
  },
  secondaryText: {
    color: 'grey', fontSize: 12 
  },
  headerText: {
    color: 'black', fontSize: 14
  }
});