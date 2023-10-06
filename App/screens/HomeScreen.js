import { StyleSheet, Text, View, Button, Image, Pressable, Alert, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {

    const [loc, setLoc] = useState([0, 0]); //Définir la localisation par défaut de la caméra
    const navigation = useNavigation();

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.log('Permission to access location was denied');
                return;
            }
            const location = await Location.getCurrentPositionAsync({});
            // Forcer la mise à jour de la localisation de la caméra
            setLoc([location.coords.latitude, location.coords.longitude]);
        })();
        return () => {
            setElementRef(null);
        };
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <Image
                    style={styles.Logo}
                    source={require('../assets/Logo.png')}
                />
                <Text style={styles.Title}>ECOSORT</Text>
            </View>


            <View style={styles.Boutons}>
                <Pressable style={styles.Team} onPress={() => navigation.navigate("PhotoScreen")}>
                    <Text style={styles.TeamText}>Notre équipe</Text>
                </Pressable>
                <Pressable style={styles.Team} onPress={() => navigation.navigate("ResultScreen")}>
                    <Text style={styles.TeamText}>Trier</Text>
                </Pressable>
            </View>
            <Image
                style={styles.Accueil}
                source={require('../assets/accueil.png')}
            />
            <View style={styles.Analyse}>
                <Pressable style={styles.BoutonAnalyse} onPress={() => navigation.navigate("CameraView", { location: loc })}>
                    <Text style={styles.TeamText}>Analyser un déchet</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: "100%",
        width: "100%",
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


    Boutons: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
        top: "-40%",
    },
    Team: {
        backgroundColor: 'green',
        borderRadius: 15,
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginHorizontal: 10,
        width: "40%",
        height: "100%"
    },
    TeamText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 15,
    },
    Accueil: {
        maxWidth: "100%",
        maxHeight: "35%",
        resizeMode: 'contain',
        top: "-17%"
    },
    Analyse: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
        top: "-30%",
    },
    BoutonAnalyse: {
        backgroundColor: 'green',
        borderRadius: 15,
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
});