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

            <View style={styles.Header}>
                <Text style={styles.TitrePresentation}>Qui sommes nous ?</Text>
            </View>
            <View style={styles.Header}>
                <Text style={styles.Presentation}> Notre application innovante vous permet de prendre une photo de tout déchet,
                    puis l'analyser pour vous dire exactement dans quelle poubelle le jeter,
                    contribuant ainsi à rendre le recyclage plus simple et plus efficace que jamais.
                </Text>
            </View>
            <View style={styles.Header}>
                <Text style={styles.PresentationEquipe}> Nous sommes un groupe de 8 jeunes étudiants en 3ème année au sein de l'école Epsi Bordeaux.
                </Text>
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

    TitrePresentation: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        top: "-80%",
        left: "-15%",
    },

    Presentation: {
        flex: 1,
        fontSize: 20,
        top: "-160%",
        left: "1%",
    },

    PresentationEquipe: {
        flex: 1,
        fontSize: 20,
        top: "-225%",
        left: "1%",
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
