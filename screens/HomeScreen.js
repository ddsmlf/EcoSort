import { StyleSheet, Text, View, Button, Pressable, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ParameterScreen() {
    const navigation = useNavigation();

    const PhotoScreen = () => {
        navigation.navigate('PhotoScreen');
    }

    const ResultScreen = () => {
        navigation.navigate('PhotoScreen');
    }

    return(
      <View style={styles.container}>
          <Pressable onPress={PhotoScreen}>
              <Text>PhotoScreen</Text>
          </Pressable>
          <Pressable style={styles.buttonLogin} onPress={ResultScreen}>
              <Text>ResultScreen</Text>
          </Pressable>
      </View>
    )
}
const styles = StyleSheet.create({
    container: {
    top:'50%',
    textAlign:'center',
    backgroundColor: '#F0F3F4',
    height: "100%",
    width: "100%",
  },

  });