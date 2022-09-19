import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { theme } from '~/theme';

type NotificationCardProps = {
  type: 'NewFollow' | 'LikeYourRecipe';
};

export const NotificationCard: React.FC<NotificationCardProps> = ({ type }) => {
  return (
    <View style={styles.notificationCard}>
      <View style={styles.notificationCardContent}>
        <Image
          source={{
            uri: 'https://avatars.githubusercontent.com/u/59426856?v=4'
          }}
          style={{
            width: 48,
            height: 48,
            borderRadius: 24
          }}
        />
        <View style={styles.userDetails}>
          <Text style={styles.userName}>João Amadeu</Text>
          <Text style={styles.updateLabel}>now following you 1h</Text>
        </View>
      </View>

      {type === 'LikeYourRecipe' ? (
        <Image
          style={{ width: 64, height: 64, borderRadius: 12 }}
          source={{
            uri: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
          }}
        />
      ) : null}
      {type === 'NewFollow' ? (
        <TouchableOpacity style={styles.followButton}>
          <Text style={styles.buttonText}>Follow</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  notificationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  notificationCardContent: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  userDetails: {
    marginLeft: 16
  },
  userName: {
    ...theme.typography.h3
  },
  updateLabel: {
    ...theme.typography.s
  },
  followButton: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 32
  },
  buttonText: {
    ...theme.typography.s,
    color: theme.colors.white
  }
});
