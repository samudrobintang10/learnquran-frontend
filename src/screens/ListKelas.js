import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Button from "../components/atoms/Button";
import Gap from "../components/atoms/Gap";
import Kartu from "../components/atoms/Kartu";
import BackHeader from "../components/molecules/BackHeader";
import Color from "../utilities/Color";
import ClassAPI from "../services/ClassAPI";
import { useState, useEffect } from "react";
import { FlatList } from "react-native-web";
import Input from "../components/atoms/Input";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Loading from "../components/molecules/Loading";

export default function ListKelas({ navigation }) {
  const [allClass, setAllClass] = useState([]);
  const [searchText, setSearchText] = useState("");

  const getAllClass = async () => {
    try {
      const { data: response } = await ClassAPI.getAllClass();
      setAllClass(response?.results?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setAllClass([]);
    getAllClass();
  }, []);

  const handleSearch = async (text) => {
    setAllClass([]);
    try {
      const { data: response } = await ClassAPI.searchClass(text);
      setAllClass(response?.results?.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <BackHeader onPress={() => navigation.goBack()} judul={"Cari Kelas"} />
      <Gap height={20} />
      <View style={styles.search}>
        <View style={styles.inputSearch}>
          <Input
            onChangeText={(text) => setSearchText(text)}
            placeholder="Cari kelas..."
          />
        </View>
        <Button
          title={
            <FontAwesomeIcon icon={faSearch} size={20} color={Color.white} />
          }
          onPress={() => handleSearch(searchText)}
        />
      </View>
      <Gap height={10} />
      <ScrollView style={styles.content}>
        {allClass.length > 0 &&
          allClass.map((item) => {
            return (
              <>
                <Kartu
                  key={item.id}
                  title={item.name}
                  teacher_name={item.teacher_name}
                  total_student={item.total_student}
                  capacity={item.capacity}
                  onPress={() =>
                    navigation.navigate("DetailKelasPembelajar", {
                      idClass: item.id,
                    })
                  }
                />
                <Gap height={10} />
              </>
            );
          })}
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
    fontSize: 24,
    fontWeight: "600",
    color: "#fff",
  },
  firstrow: {
    flex: 0.125,
    backgroundColor: Color.solidGreen,
    justifyContent: "center",
    alignItems: "center",
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
  },
  search: {
    marginLeft: 19,
    marginRight: 19,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputSearch: {
    width: "72%",
  },
});
