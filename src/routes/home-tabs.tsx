import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import { HomeScreen, NotificationScreen, ProfileScreen, ScanScreen, UploadScreen } from '~/screens';
import { theme } from '~/theme';

export type HomeBottomTabsParamList = {
  Home: undefined;
  Upload: undefined;
  Scan: undefined;
  Notification: undefined;
  Profile: undefined;
};

type MaterialIconName = React.ComponentProps<typeof MaterialIcons>['name'];

type IconProps = {
  [key: string]: MaterialIconName;
};

const icons: IconProps = {
  Home: 'home-filled',
  Upload: 'mode-edit',
  Scan: 'qr-code-scanner',
  Notification: 'notifications',
  Profile: 'person'
};

const Tab = createBottomTabNavigator<HomeBottomTabsParamList>();

export const HomeTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.secondaryText,
        tabBarLabelStyle: {
          lineHeight: 15,
          fontSize: 12,
          fontFamily: 'Inter-Medium'
        },
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <MaterialIcons name={icons[route.name]} size={24} color={color} />
        )
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Upload" component={UploadScreen} />
      <Tab.Screen name="Scan" component={ScanScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
