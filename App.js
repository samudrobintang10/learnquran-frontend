import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./src/router";

const MainApp = () => {
  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </>
  );
};

function App() {
  return <MainApp />;
}

export default App;
