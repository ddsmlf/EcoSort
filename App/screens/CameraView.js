import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; // Importez l'icône AntDesign

export default function CameraView() {
  const navigation = useNavigation();
  const route = useRoute();
  const loc = route.params.location;

  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [capturedPhoto, setCapturedPhoto] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      let photo = await cameraRef.takePictureAsync();
      setCapturedPhoto(photo);
      //console.log(photo)
      navigation.navigate('ApiRequest', { capturedPhoto: photo, location: loc });
    }
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.Container}>
      <View style={styles.Header}>
        <Image
          style={styles.Logo}
          source={require('../assets/Logo.png')}
        />
        <Text style={styles.Title}>ECOSORT</Text>
      </View>
      <View style={styles.Boutons}>
        {/* Bouton de retour */}
        <Pressable
          style={styles.Team}
          onPress={() => navigation.navigate('HomeScreen')}
        >
          <AntDesign name="arrowleft" size={24} color="white" />
        </Pressable>
      </View>
      <View style={styles.CameraView}>
        <Camera
          style={{ flex: 1 }}
          type={Camera.Constants.Type.back}
          ref={ref => {
            setCameraRef(ref);
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              flexDirection: 'row',
              alignSelf: "center"
            }}
          >
            <Pressable
              style={styles.Bouton}
              onPress={takePicture}
            >
              {({ pressed }) => (
                <View
                  style={[
                    styles.BoutonStyle,
                    { backgroundColor: pressed ? 'gray' : 'white' },
                  ]}
                />
              )}
            </Pressable>
          </View>
        </Camera>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'white',
    height: "100%",
    width: "100%",
  },

  ////// Header => logo et nom //////////
  Header: {
    top: "-20%",
    height: "50%",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25,
  },
  Logo: {
    //flex: 1,
    maxWidth: "35%",
    maxHeight: "35%",
    resizeMode: 'contain',
  },
  Title: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
  },

  /////// Camera ///////////
  CameraView: {
    height: '75%',
    backgroundColor: "black",
    top: "-25%"
  },
  Bouton: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    margin: "10%"
  },
  BoutonStyle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'white'
  },

  //BOUTON
  Boutons: {
    top: "-60%",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between', // Utilisez 'space-around' pour un espacement égal entre les boutons
    paddingHorizontal: 20, // Ajoutez un peu d'espacement entre les bords de l'écran et les boutons

    borderRadius: 50,
    backgroundColor: 'white'


  },

  Team: {
    backgroundColor: 'green',
    borderRadius: 50, // Pour faire un cercle
    padding: 10,
    width: 40, // Ajustez la taille du cercle selon vos besoins
    height: 40, // Ajustez la taille du cercle selon vos besoins
    alignItems: 'center',
    justifyContent: 'center',
  },
  TeamText: {
    color: 'white',
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
  },

});