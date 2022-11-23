import React from 'react';
import { useFonts } from 'expo-font';
import { Pressable, Image, StyleSheet, Text, View } from 'react-native';

const Login = () => {
    // const [fontsLoaded] = useFonts({
    //     'Inter-Black': require('../assets/fonts/avenir/'),
    // });
    return (
        <View style={styles.container}>
            <View style={styles.TopContainer}>
                <Image
                    style={styles.TextLogo}
                    source={require('../assets/Text_Logo.png')}
                />
            </View>
            <View style={styles.BottomContainer}>
                <View style={styles.learnMoreContainer}>
                    <Text style={styles.learnMoreText}>Learn more about proteins</Text>
                </View>
                <View style={styles.DescriptionContainer}>
                    <Text style={styles.DescriptionText}>SwiftyProteins is a visualizer for proteins models according to standardized representation from the famous PDB (Protein Data Bank) using SceneKit.</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Pressable style={styles.LoginButton}>
                        <Text style={styles.ButtonText}>
                            Log In
                        </Text>
                    </Pressable>
                </View>

            </View>
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextLogo: {
        position: "absolute",
        bottom: "20%",
        width: 320,
        height: 158
    },
    LoginButton: {
        backgroundColor: '#142445',
        width: 260,
        height: 60,
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ButtonText: {
        color: "white",
        fontSize: 18,
        fontWeight: '600',
    },
    DescriptionContainer: {
        width: '90%',
        marginBottom: 30
    },
    DescriptionText: {
        color: "#808DA6",
        fontSize: 15,
        fontWeight: '500',
        textAlign: 'center'
    },
    learnMoreContainer: {
        width: '60%',
        marginBottom: 5
    },
    learnMoreText: {
        color: "#142445",
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonContainer: {
    },
    TopContainer: {
        position: 'absolute',
        top: 0,
        // backgroundColor: "green",
        height: "60%",
        width: "100%",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    BottomContainer: {
        position: 'absolute',
        bottom: 0,
        // backgroundColor: "red",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 2,
        height: "40%",
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    }
});