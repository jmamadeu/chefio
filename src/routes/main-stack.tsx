import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeTabsNavigator } from './home-tabs';

import { OnboardingScreen, SignInScreen } from '~/screens';

export type RootStackParamList = {
  Onboarding: undefined;
  SignIn: undefined;
  HomeTabsNavigator: undefined;
};

const MainStack = createNativeStackNavigator<RootStackParamList>();

export const MainStackNavigator = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Group screenOptions={{ headerShown: false }}>
        <MainStack.Screen component={OnboardingScreen} name="Onboarding" />
        <MainStack.Screen component={SignInScreen} name="SignIn" />
      </MainStack.Group>
      <MainStack.Group screenOptions={{ headerShown: false }}>
        <MainStack.Screen component={HomeTabsNavigator} name="HomeTabsNavigator" />
      </MainStack.Group>
    </MainStack.Navigator>
  );
};
