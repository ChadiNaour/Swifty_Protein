import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import type { RootStackParamList } from '../App';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

const Splash = ( {navigation} : Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.animationContainer}>
                {/* <Text>Splash</Text> */}
                <LottieView
                    source={require('../assets/Atom.json')}
                    autoPlay
                    loop={false}
                    onAnimationFinish={() => {
                        navigation.navigate('Login')
                    }}
                />
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
        width: 250,
        height: 250,
    }
});