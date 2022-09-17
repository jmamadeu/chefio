import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';

import { HomeScreen, NotificationScreen, ProfileScreen, ScanScreen, UploadScreen } from '~/screens';
import { theme } from '~/theme';

export type HomeBottomTabsParamList = {
  Home: undefined;
  Upload: undefined;
  Scan: undefined;
  Notification: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<HomeBottomTabsParamList>();

function getIconColor(focused: boolean) {
  return focused ? theme.colors.primary : theme.colors.secondaryText;
}

export const HomeTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.secondaryText,
        tabBarLabelStyle: {
          lineHeight: 15,
          fontSize: 12,
          fontFamily: 'Inter-Medium'
        },
        headerShown: false
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="home-variant" size={24} color={getIconColor(focused)} />
          )
        }}
        component={HomeScreen}
      />

      <Tab.Screen
        name="Upload"
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons name="edit" size={24} color={getIconColor(focused)} />
          )
        }}
        component={UploadScreen}
      />

      <Tab.Screen
        name="Scan"
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="magnify-scan" size={24} color={getIconColor(focused)} />
          )
        }}
        component={ScanScreen}
      />

      <Tab.Screen
        name="Notification"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="md-notifications" size={24} color={getIconColor(focused)} />
          )
        }}
        component={NotificationScreen}
      />

      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons name="person" size={24} color={getIconColor(focused)} />
          )
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};
