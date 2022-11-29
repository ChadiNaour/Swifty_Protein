import React, { useCallback } from 'react';
import { Pressable, Image, Alert, StyleSheet, Text, View, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as LocalAuthentication from 'expo-local-authentication';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;
const Login = ({ navigation }: Props) => {
    const [fontsLoaded] = useFonts({
        'NexaBold': require('../assets/fonts/Nexa/NexaTextDemo-Bold.ttf'),
        'MondaBold': require('../assets/fonts/Monda/Monda-Bold.ttf'),
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

    async function authenticate() {
        try {
            const authentTypes = await LocalAuthentication.supportedAuthenticationTypesAsync();
            console.log("authentification types:", authentTypes);
            if (authentTypes.includes(1) || authentTypes.includes(2)) {
                const result = await LocalAuthentication.authenticateAsync();
                console.log("authentification result", result);
                if (result.success) {
                    navigation.navigate('Home');
                }
            }
            else
                navigation.navigate('Home');
        }
        catch (error: any) {
            Alert.alert("an error has occured", error.message);
        }

    }

    return (
        <View style={styles.container} onLayout={onLayoutRootView}>
            <View style={styles.TopContainer}>
                <Image
                    style={styles.SymbolLogo}
                    source={require('../assets/images/Symbol_Logo.png')}
                />
                <Text style={{ position: "absolute", bottom: -80, fontFamily: 'MondaBold', fontSize: 23, color: 'black' }}>42 Proteins</Text>
            </View>
            <View style={styles.BottomContainer}>
                <View style={styles.learnMoreContainer}>
                    <Text style={{
                        fontFamily: 'NexaBold2',
                        color: "#0F0E0E",
                        fontSize: 26,
                        textAlign: 'center'
                    }}>Learn more about proteins</Text>
                </View>
                <View style={styles.DescriptionContainer}>
                    <Text style={{
                        fontFamily: 'NexaBold',
                        color: "#8A8A8A",
                        fontSize: 16,
                        fontWeight: '500',
                        textAlign: 'center'
                    }}>42 Proteins is a visualizer for protein models according to the standardized representation from the famous PDB (Protein Data Bank) using SceneKit.</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Pressable style={styles.LoginButton} onPress={authenticate}>
                        <Text style={{
                            fontFamily: 'NexaBold',
                            color: "white",
                            fontSize: 18,
                            fontWeight: '600',
                        }}>
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
    TopContainer: {
        position: 'absolute',
        top: 0,
        backgroundColor: "#0F0E0E",
        height: "40%",
        width: "100%",
        borderBottomEndRadius: 150,
        borderBottomStartRadius: 150,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    SymbolLogo: {
        position: "absolute",
        bottom: -45,
        width: 110,
        height: 110
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
    },
    learnMoreContainer: {
        width: '70%',
        marginBottom: 20
    },
    DescriptionContainer: {
        width: '85%',
        marginBottom: 30
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 50,
    },
    LoginButton: {
        backgroundColor: '#0F0E0E',
        width: 220,
        height: 55,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
});