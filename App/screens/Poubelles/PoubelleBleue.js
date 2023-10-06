import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Image, Pressable, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

export default function PoubelleBleue() {
    const navigation = useNavigation();
    const route = useRoute();

    const couleur = route.params.couleur;

    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <Image
                    style={styles.Logo}
                    source={require('../../assets/Logo.png')}
                />
                <Text style={styles.Title}>ECOSORT</Text>
            </View>
            {couleur === "bleu" ? (
                <View style={styles.Poubelle}>
                    <Image
                        style={styles.PoubelleImg}
                        source={require('../../assets/PoubelleBleue.png')}
                    />
                    <View style={styles.TitleContainer}>
                        <Text style={styles.TitlePoubelle}>Poubelle Bleue</Text>
                    </View>
                    <View >
                        <Text style={styles.Presentation}> La poubelle bleue est dédiée à la collecte du
                            papier et du carton,
                            tels que journaux, magazines
                            et cartons d'emballage
                        </Text>
                    </View>
                </View>
            ) : null}
            {couleur === "vert" ? (
                <View style={styles.Poubelle}>
                    <Image
                        style={styles.PoubelleImg}
                        source={require('../../assets/PoubelleVerte.png')}
                    />
                    <View style={styles.TitleContainer}>
                        <Text style={styles.TitlePoubelle}>Poubelle Verte</Text>
                    </View>
                    <View >
                        <Text style={styles.Presentation}> vous pouvez placer les déchets organiques comme les restes de cuisine (fruits, légumes, coquilles d'œufs) et les déchets de jardin
                        </Text>
                    </View>
                </View>
            ) : null}
            {couleur === "marron" ? (
                <View style={styles.Poubelle}>
                    <Image
                        style={styles.PoubelleImg}
                        source={require('../../assets/PoubelleMarron.png')}
                    />
                    <View style={styles.TitleContainer}>
                        <Text style={styles.TitlePoubelle}>Bac marron</Text>
                    </View>
                    <View>
                        <Text style={styles.Presentation}> Le bac marron est destiné aux déchets verts et au carton.
                        </Text>
                    </View>
                </View>
            ) : null}
            {couleur === "jaune" ? (
                <View style={styles.Poubelle}>
                    <Image
                        style={styles.PoubelleImg}
                        source={require('../../assets/PoubelleJaune.png')}
                    />
                    <View style={styles.TitleContainer}>
                        <Text style={styles.TitlePoubelle}>Poubelle jaune</Text>
                    </View>
                    <View>
                        <Text style={styles.Presentation}> La poubelle jaune est un bac à ordure très polyvalent, car elle peut contenir de nombreux types de déchets (dont le métal, le plastique...).
                        </Text>
                    </View>
                </View>
            ) : null}
            {couleur === "point-collecte" ? (
                <View style={styles.Poubelle}>
                    <Image
                        style={styles.DechetterieImg}
                        source={require('../../assets/dechetterie.jpg')}
                    />
                    <View style={styles.TitleContainer}>
                        <Text style={styles.TitleDechetterie}>Déchetterie</Text>
                    </View>
                    <View>
                        <Text style={styles.PresentationDechetterie}> La déchetterie permet de jeter des déchets encombrants, dangereux, électroniques, en construction.
                        </Text>
                    </View>
                </View>
            ) : null}
            {couleur === "none" ? (
                <View style={styles.TitleContainer}>
                    <Text style={styles.TitleErreur}>Le déchet n'a pas pu être identifié</Text>
                </View>
            ) : null}
            <View style={styles.Boutons}>
                <Pressable style={styles.Retour} onPress={() => navigation.navigate("HomeScreen")}>
                    <Text style={styles.RetourText}>Retour</Text>
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

    Header: {
        top: "-5%",
        height: "30%",
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

    Poubelle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    PoubelleImg: {
        maxWidth: "100%",
        maxHeight: "100%",
        resizeMode: 'contain',
        top: 370,
    },

    TitleContainer: {
        position: 'absolute',
        top: "30%",
        width: '100%',
        textAlign: 'center',
        left: "30%",

    },

    TitlePoubelle: {
        fontWeight: 'bold',
        fontSize: 22,
        top: 160,

    },

    TitleErreur: {
        fontWeight: 'bold',
        fontSize: 20,
        top: "500%",
        left: "-20%"
    },

    Presentation: {
        fontSize: 18,
        top: "110%",
        height: '250%',
        alignSelf: "center",
        textAlign: 'center',
    },

    DechetterieImg: {
        maxWidth: "100%",
        maxHeight: "100%",
        resizeMode: 'contain',
        top: "129%",
        textAlign: 'center',
    },

    TitleDechetterie: {
        fontWeight: 'bold',
        fontSize: 20,
        top: "500%",
        left: "5%",

    },

    PresentationDechetterie: {
        flex: 1,
        fontSize: 20,
        top: "100%",
        left: "1%",
        textAlign: 'center',
    },

    /////// Bouton retour ////////
    Boutons: {
        top: "-40%",
        height: "50%",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between', // Utilisez 'space-around' pour un espacement égal entre les boutons
        paddingHorizontal: 10, // Ajoutez un peu d'espacement entre les bords de l'écran et les boutons

    },
    Retour: {
        backgroundColor: 'green',
        borderRadius: 15,
        paddingVertical: 15, //valeur a augmenter pour faire grossir le bouton
        paddingHorizontal: 20, //valeur a augmenter pour faire grossir le bouton
        width: 130,
        marginRight: 40,
        marginLeft: "30%",
        top: "82%",
    },
    RetourText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 15,
    },



});
