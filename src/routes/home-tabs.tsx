import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen } from '~/screens';

export type HomeBottomTabsParamList = {
  Home: undefined;
};

const Tab = createBottomTabNavigator<HomeBottomTabsParamList>();

export const HomeTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
};
