import { StatusBar } from "expo-status-bar";
import MainNavigator from "./navigators/MainNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "./lib/storage";

export default function App() {
  return (
    <SafeAreaProvider>
      <MainNavigator />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
