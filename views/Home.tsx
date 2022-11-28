import React, { useCallback, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
const Home = ({ navigation }: Props) => {
    const [Search, onChangeSearch] = useState("");
    const [fontsLoaded] = useFonts({
        'NexaBold': require('../assets/fonts/Nexa/NexaTextDemo-Bold.ttf'),
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
            <StatusBar style="auto" />
            <View style={styles.TopContainer}>
                <View style={styles.SearchContainer}>
                    <Text style={{ fontFamily: 'NexaBold', fontSize: 23, color: 'black' }}>Ligands</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeSearch}
                        value={Search}
                        placeholder="Search"
                    />
                </View>
            </View>
        </View>
    )
}

export default Home;

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
        height: 150,
        width: "100%",
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    SearchContainer: {
        position: 'absolute',
        top: 50,
        backgroundColor: "white",
        height: 150,
        width: "85%",
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    input: {
        width: '80%',
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#DADADA",
        backgroundColor: "F5F5F5",
        paddingHorizontal: 15,
        paddingVertical: 10
    },
});