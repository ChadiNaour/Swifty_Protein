import React, { useCallback, useEffect, useState } from 'react';
//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//views
// import Splash from './views/Splash';
import Login from './views/Login';
import Home from './views/Home';
import Preview from './views/Preview';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

export type RootStackParamList = {
  Splash: any;
  Login: any;
  Home: any;
  Preview: any;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'NexaBold': require('./assets/fonts/Nexa/NexaTextDemo-Bold.ttf'),
    'NexaBold2': require('./assets/fonts/Nexa/NexaDemo-Bold.ttf'),
  });

  useEffect(() => {
    // Once our data is ready, hide the Splash Screen
    const hideSplashScreen = async () => {
      await SplashScreen.hideAsync();
    }
    if (fontsLoaded) hideSplashScreen();
  }, [fontsLoaded])
  // if (!appIsReady) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Preview" component={Preview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
