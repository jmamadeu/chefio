import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { OnboardingScreen } from '~/screens/onboarding/onboarding';
import { SignInScreen } from '~/screens/sign-in/sign-in';

export type RootStackParamList = {
  Onboarding: undefined;
  SignIn: undefined;
};

const MainStack = createNativeStackNavigator<RootStackParamList>();

export const Router = () => (
  <MainStack.Navigator>
    <MainStack.Group screenOptions={{ headerShown: false }}>
      <MainStack.Screen component={OnboardingScreen} name="Onboarding" />
      <MainStack.Screen component={SignInScreen} name="SignIn" />
    </MainStack.Group>
  </MainStack.Navigator>
);
