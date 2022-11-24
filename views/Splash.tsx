import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import type { RootStackParamList } from '../App';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

const Splash = ({ navigation }: Props) => {

    useEffect(() => {
        var timer = setTimeout(() => {
            navigation.navigate('Login')
        }, 2000)
        return () => clearTimeout(timer);
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.animationContainer}>
                <Image style={styles.SymbolLogo} source={require("../assets/Symbol_Logo.png")} />
            </View>
        </View>
    )
}

export default Splash;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    animationContainer: {
        width: 100,
        height: 100,
    },
    SymbolLogo: {
        width: "100%",
        height: "100%"
    },
});