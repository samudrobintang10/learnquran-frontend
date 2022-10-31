import { StyleSheet, Text, View, ScrollView } from "react-native";
import Color from "../../utilities/Color";
import { Card } from 'react-native-paper';
import ButtonSmall from "./ButtonSmall";
import ButtonOuter from "./ButtonOuter";
import Gap from "../atoms/Gap";

export default function KartuProfile(props) {
    const {text1,text2,nama } = props;
    return (
        <Card style={styles.card}>
            <Card.Content>
                <View >
                    <View>
                        <Text style={styles.baseText}>{text1} <Text style={styles.innerText}>{text2}</Text></Text>
                        <Text style={styles.outerText}>{nama}</Text>
                        <Gap height={30}></Gap>
                        <View style={styles.row} >
                            <ButtonOuter title={"Edit Profile"}></ButtonOuter>
                            <Gap width={10}></Gap>
                            <ButtonSmall title={"Logout"} danger></ButtonSmall>
                        </View>
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
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    card: {
        margin: 4,
        padding: 5,
        elevation: 3,
        shadowColor: 'black'
    },
    innerText: {
        color: Color.solidGreen,
        fontWeight: 'bold'
    },
    outerText: {
        fontWeight: 'Bold',
        fontSize: 24
    },
    descriptionText: {
        color: Color.lightGray,
        fontSize: 12,
    },
    baseText:{
        color: 'grey', 
        fontSize: 16
    }
});
