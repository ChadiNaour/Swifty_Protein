import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
const Preview = () => {
    return (
        <View style={styles.container}>
            <Text>Preview</Text>
            <StatusBar style="auto" />
        </View>
    )
}

export default Preview;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});