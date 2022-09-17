import {
  Inter_500Medium as Inter500Medium,
  Inter_700Bold as Inter700Bold,
  Inter_900Black as Inter900Black,
  Inter_400Regular as Inter400Regular,
  useFonts
} from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';

import { Router } from '~/routes';

SplashScreen.preventAutoHideAsync();

export const App = () => {
  const [fontsLoaded] = useFonts({
    'Inter-Bold': Inter700Bold,
    'Inter-Medium': Inter500Medium,
    'Inter-Black': Inter900Black,
    'Inter-Normal': Inter400Regular
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Router />

      <StatusBar style="dark" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
