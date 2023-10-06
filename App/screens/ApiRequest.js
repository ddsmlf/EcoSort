import { StyleSheet, Text, View, Button, Pressable, Alert, Platform, ActivityIndicator } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ApiRequest() {
    const navigation = useNavigation();
    const route = useRoute();

    const capturedPhoto = route.params.capturedPhoto;
    const loc = route.params.location
    console.log(loc)
    var url;

    useEffect(() => {

        uri = capturedPhoto.uri
        photoName = uri.split("/Camera/")
        photoName = photoName[1]
        const formData = new FormData();
        formData.append('file', {
            uri,
            name: photoName,
            type: 'image/jpeg',
          });
            
        axios.post('http://193.203.191.151:5000/api/predict', 
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then(res => {
                console.log(res.data)
                navigation.navigate('PoubelleBleue', { couleur: res.data });
            })
            .catch(error => {
                console.error('Erreur lors de la requête API :', error);
            });
    });

    return (
        <View style={styles.container}>
            <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loaderContainer: {
        backgroundColor: 'white'
    },

    //BOUTON
    Boutons: {
        top: "-250%",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between', // Utilisez 'space-around' pour un espacement égal entre les boutons
        paddingHorizontal: 20, // Ajoutez un peu d'espacement entre les bords de l'écran et les boutons
        left: "7%",

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


//    {capturedPhoto && (
//      <Image source={{ uri: capturedPhoto.uri }} style={{ width: 200, height: 200 }} />
//    )}