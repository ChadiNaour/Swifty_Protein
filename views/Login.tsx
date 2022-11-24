import React,{ useCallback } from 'react';
import { Pressable, Image, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();

const Login = () => {
    const [fontsLoaded] = useFonts({
        'NexaBold': require('../assets/fonts/Nexa/NexaTextDemo-Bold.ttf'),
        'NexaBold2': require('../assets/fonts/Nexa/NexaDemo-Bold.ttf'),
      });

      const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded]);
    
      if (!fontsLoaded) {
        return null;
      }
    return (
        <View style={styles.container} onLayout={onLayoutRootView}>
            <View style={styles.TopContainer}>
                <Image
                    style={styles.SymbolLogo}
                    source={require('../assets/images/Symbol_Logo.png')}
                />
                <Text style={{...styles.textLogo, fontFamily: 'NexaBold'}}>42 Proteins</Text>
            </View>
            <View style={styles.BottomContainer}>
                <View style={styles.learnMoreContainer}>
                    <Text style={{...styles.learnMoreText, fontFamily: 'NexaBold'}}>Learn more about proteins</Text>
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
    textLogo: {
        position: "absolute",
        bottom: -70,
        color: 'black',
        fontSize: 20,
        fontWeight: "bold",
    },
    SymbolLogo: {
        position: "absolute",
        bottom: -45,
        width: 110,
        height: 110
    },
    LoginButton: {
        backgroundColor: '#0F0E0E',
        width: 220,
        height: 55,
        borderRadius: 10,
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
        width: '80%',
        marginBottom: 30
    },
    DescriptionText: {
        color: "#8A8A8A",
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center'
    },
    learnMoreContainer: {
        width: '60%',
        marginBottom: 20
    },
    learnMoreText: {
        color: "#142445",
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 50,
    },
    TopContainer: {
        position: 'absolute',
        top: 0,
        backgroundColor: "#0F0E0E",
        height: "40%",
        width: "100%",
        borderBottomEndRadius: 100,
        borderBottomStartRadius: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    BottomContainer: {
        position: 'absolute',
        bottom: 0,
        paddingTop: 40,
        height: "48%",
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
});