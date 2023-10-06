import { StyleSheet, Text, View, ScrollView, Button, Image, Pressable, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ParameterScreen() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <Image
          style={styles.Logo}
          source={require('../assets/Logo.png')}
        />
        <Text style={styles.Title}>ECOSORT</Text>
      </View>
      <View style={styles.Trier}>
        <Text style={styles.TitleImg}>Le tri selectif :</Text>
        <Image
          style={styles.TrierImg}
          source={require('../assets/trier.jpg')}
        />
      </View>
      <View style={styles.Boutons}>
        <Pressable style={styles.Team} onPress={() => navigation.navigate("HomeScreen")}>
          <Text style={styles.TeamText}>Retour</Text>
        </Pressable>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: "100%",
    width: "100%",
    alignItems: 'center',
  },

  ///HEADER////

  Header: {
    top: "-15%",
    height: "50%",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  Logo: {
    flex: 1,
    maxWidth: "40%",
    maxHeight: "40%",
    resizeMode: 'contain',
  },
  Title: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
  },
  TitleImg: {
    fontWeight: 'bold',
    fontSize: 23,
    top: "-30%",
    textAlign: 'center',
  },
  Trier: {
    flex: 1,
    maxWidth: "40%",
    maxHeight: "40%",
    resizeMode: 'contain',
  },
  TrierImg: {
    flex: 1,
    maxWidth: "200%",
    maxHeight: "200%",
    resizeMode: 'contain',
    alignSelf: 'center',
    top: "-30%"
  },

  //BOUTON
  Boutons: {
    top: "-10%",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between', // Utilisez 'space-around' pour un espacement égal entre les boutons
    paddingHorizontal: 20, // Ajoutez un peu d'espacement entre les bords de l'écran et les boutons


  },

  Team: {
    backgroundColor: 'green',
    borderRadius: 15,
    paddingVertical: 10, //valeur a augmenter pour faire grossir le bouton
    paddingHorizontal: 20, //valeur a augmenter pour faire grossir le bouton
    width: 165,
    height: 55,
    marginRight: 40,
    marginLeft: 40

  },
  TeamText: {
    color: 'white',
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
  },

});
