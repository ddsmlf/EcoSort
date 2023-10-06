import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen.js';
import PhotoScreen from './screens/PhotoScreen.js';
import ResultScreen from './screens/ResultScreen.js';
import CameraView from './screens/CameraView.js';
import ApiRequest from './screens/ApiRequest.js';
import PoubelleBleue from './screens/Poubelles/PoubelleBleue.js';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{
        showLabel: false,
        headerShown: false,
      }}>

        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="PhotoScreen" component={PhotoScreen}/>  
        <Stack.Screen name="ResultScreen" component={ResultScreen}/>
        <Stack.Screen name="CameraView" component={CameraView}/>
        <Stack.Screen name="ApiRequest" component={ApiRequest}/>
        <Stack.Screen name="PoubelleBleue" component={PoubelleBleue} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  test: {
    color: "red"
  }
});
