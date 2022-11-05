import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./src/router";
import { Provider, useSelector } from "react-redux";
import store from "./src/redux/store";
import Loading from "./src/components/molecules/Loading";
import { LogBox, StatusBar } from "react-native";

const MainApp = () => {
  const stateGlobal = useSelector((state) => state);
  return (
    <>
      <NavigationContainer>
        <StatusBar hidden={true} />
        <Router />
      </NavigationContainer>
      {stateGlobal.loading && <Loading />}
    </>
  );
};

function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}

export default App;
