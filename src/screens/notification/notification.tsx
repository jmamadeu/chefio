import { FlashList } from '@shopify/flash-list';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { NotificationCard } from '~/components/notification-card/notification-card';
import { useGetStatusBarHeight } from '~/hooks/usse-get-status-bar-height';
import { theme } from '~/theme';
import { colors } from '~/theme/colors';

const Notifications = [
  {
    when: 'New',
    updates: [
      {
        who: {
          image:
            'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
          name: 'João amadeu'
        },
        updateMessage: 'now following you',
        updateType: 'Follow',

        updatedAt: new Date()
      },
      {
        who: {
          image:
            'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
          name: 'João amadeu'
        },
        updateMessage: 'now following you',
        updateType: 'Follow',

        updatedAt: new Date()
      }
    ]
  },
  {
    when: 'Today',
    updates: [
      {
        who: {
          image:
            'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
          name: 'João amadeu'
        },
        updateMessage: 'now following you',
        updateType: 'Follow',

        updatedAt: new Date()
      }
    ]
  }
];

export const NotificationScreen = () => {
  const STATUSBAR_HEIGHT = useGetStatusBarHeight();

  return (
    <View style={[styles.container, { paddingTop: STATUSBAR_HEIGHT }]}>
      <FlashList
        renderItem={({ item }) => (
          <View>
            <View style={styles.timeContainer}>
              <Text style={styles.timeLabel}>{item}</Text>
            </View>
            <View style={styles.notificationCard}>
              <NotificationCard type="NewFollow" />
            </View>
            <View style={styles.notificationCard}>
              <NotificationCard type="NewFollow" />
            </View>
            <View style={styles.notificationCard}>
              <NotificationCard type="LikeYourRecipe" />
            </View>
          </View>
        )}
        estimatedItemSize={50}
        data={['New', 'Today', 'Yesterday']}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ height: 4 }} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 24
  },
  timeLabel: {
    ...theme.typography.h2
  },
  timeContainer: {
    marginBottom: 24
  },
  notificationCard: {
    marginBottom: 24
  }
});
