import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../screens/Splash";
import Login from "../screens/Login";
import Register from "../screens/Register";
import ListKelas from "../screens/ListKelas";
import LandingPage from "../screens/LandingPage";
import DetailPembelajar from "../screens/DetailPembelajar";
import DetailKelasPembelajar from "../screens/DetailKelasPembelajar";
import DetailSoal from "../screens/DetailSoal";
import ListKelasPengajar from "../screens/ListKelasPengajar";
import BuatKelas from "../screens/BuatKelas";
import DetailKelasPengajar from "../screens/DetailKelasPengajar";
import DetailPengajar from "../screens/DetailPengajar";
import UbahProfil from "../screens/UbahProfil";
import EditKelas from "../screens/EditKelas";
import TambahSoal from "../screens/TambahSoal";
import EditSoal from "../screens/EditSoal";
import SubmisiPelajar from "../screens/SubmisiPelajar";
import FormNilaiSubmisi from "../screens/FormNilaiSubmisi";
import DetailNilaiSubmisi from "../screens/DetailNilaiSubmisi";

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          animation: "slide_from_left",
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="ListKelas"
        component={ListKelas}
        options={{ headerShown: false, animation: "slide_from_bottom" }}
      />
      <Stack.Screen
        name="LandingPage"
        component={LandingPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailPembelajar"
        component={DetailPembelajar}
        options={{
          headerShown: false,
          animation: "slide_from_left",
        }}
      />
      <Stack.Screen
        name="DetailPengajar"
        component={DetailPengajar}
        options={{
          headerShown: false,
          animation: "slide_from_left",
        }}
      />
      <Stack.Screen
        name="DetailKelasPembelajar"
        component={DetailKelasPembelajar}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailSoal"
        component={DetailSoal}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UbahProfil"
        component={UbahProfil}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="ListKelasPengajar"
        component={ListKelasPengajar}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BuatKelas"
        component={BuatKelas}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditKelas"
        component={EditKelas}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TambahSoal"
        component={TambahSoal}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditSoal"
        component={EditSoal}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SubmisiPelajar"
        component={SubmisiPelajar}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="FormNilaiSubmisi"
        component={FormNilaiSubmisi}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailNilaiSubmisi"
        component={DetailNilaiSubmisi}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailKelasPengajar"
        component={DetailKelasPengajar}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
