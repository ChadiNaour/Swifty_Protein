import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';
import Flatlist from '../components/Flatlist';
import ligands from "../assets/Ligands/Ligands.json";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
const Home = ({ navigation }: Props) => {
    const [Search, onChangeSearch] = useState("");
    const [displayedData, setDisplayedData] = useState(ligands)
    const [fontsLoaded] = useFonts({
        'NexaBold': require('../assets/fonts/Nexa/NexaTextDemo-Bold.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    useEffect(() => {
        if (Search.length > 0) {
            const timer = setTimeout(() => {
                const newData = ligands.filter(value => value.toLowerCase().includes(Search.toLowerCase()))
                setDisplayedData(newData);
            }, 500)
            return () => clearTimeout(timer)
        }
        else
            setDisplayedData(ligands);
    }, [Search])

    return (
            <View style={styles.container} onLayout={onLayoutRootView} >
                <StatusBar style="auto" />
                <View style={styles.TopContainer}>
                    <View style={styles.roundedBackground}></View>
                    <View style={styles.SearchContainer}>
                        <Text style={{ fontFamily: 'NexaBold', fontSize: 22, color: 'black' }}>Ligands</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeSearch}

                            clearTextOnFocus={true}
                            value={Search}
                            placeholder="Search"
                        />
                    </View>
                </View>
                <Flatlist DATA={displayedData} />
            </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    TopContainer: {
        position: 'relative',
        height: 200,
        width: "100%",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    roundedBackground: {
        position: 'absolute',
        top: 0,
        backgroundColor: "#0F0E0E",
        height: 200,
        width: "100%",
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15,
    },
    SearchContainer: {
        position: 'absolute',
        top: 95,
        backgroundColor: "white",
        height: 150,
        width: "85%",
        borderRadius: 10,
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
        zIndex: 99,
    },
    input: {
        width: '85%',
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#DADADA",
        backgroundColor: "F5F5F5",
        paddingHorizontal: 15,
        paddingVertical: 10
    },
});