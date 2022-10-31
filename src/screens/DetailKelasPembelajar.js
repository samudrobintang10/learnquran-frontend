import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Button from "../components/atoms/Button";
import Gap from "../components/atoms/Gap";
import KartuProfile from "../components/atoms/KartuProfile";
import KartuDetail from "../components/atoms/KartuDetail";
import Color from "../utilities/Color";
import ButtonRed from "../components/atoms/ButtonSmall";

export default function DetailKelasPembelajar({ navigation }) {
    return (
        <View style={styles.container}>
            <Gap height={20} />
            <View style={styles.firstrow}>
                <Text style={styles.baseText}>
                    Kelas Mengaji 1
                </Text>
            </View>
            <Gap height={20} />
            <ScrollView style={styles.content}>
                <KartuProfile 
                    text1={'Anda belajar dengan'} 
                    nama={'Ustadz Rasyid'}>
                </KartuProfile>
                <Gap height={10} />
                <KartuDetail
                    judul ={'Tugas 1'} 
                    deskripsi ={'Membaca Surat Al-Fatihah ayat 1 - 5'}>
                   
                </KartuDetail>
                <Button title={"MASUK"} onPress={() => 
                    navigation.navigate('LandingPage')} />

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
    baseText: {
        fontSize: 20,
        fontWeight: "500",
        color: "#fff",
        
    },
    baseText2: {
        fontSize: 20,
        fontWeight: "600",
        color: "#000",
        paddingLeft: 10
    },
    firstrow: {
        
        backgroundColor: Color.solidGreen,
        justifyContent: "center",
        alignItems: "center",
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
        height: 100
    },
});