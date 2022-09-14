import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { HomeScreen } from '~/screens/home/home';

export const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
