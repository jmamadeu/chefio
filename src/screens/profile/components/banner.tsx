import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { theme } from '~/theme';

export const ProfileBannerCard = () => {
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity>
          <MaterialIcons
            name="arrow-back-ios"
            activeOpacity={0.8}
            size={20}
            color={theme.colors.mainText}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="share" size={20} color={theme.colors.mainText} />
        </TouchableOpacity>
      </View>
      <View style={styles.image}>
        <Image
          source={{
            uri: 'https://avatars.githubusercontent.com/u/59426856?v=4'
          }}
          style={styles.imageUrl}
        />

        <Text style={styles.userName}>João Amadeu</Text>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.stat}>
          <Text style={theme.typography.h2}>32</Text>
          <Text style={styles.statLabel}>Recipes</Text>
        </View>
        <View style={styles.stat}>
          <Text style={theme.typography.h2}>290</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
        <View style={styles.stat}>
          <Text style={theme.typography.h2}>1.240</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 24
  },
  image: {
    marginTop: 20,
    alignItems: 'center'
  },
  imageUrl: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  userName: {
    marginTop: 24,
    ...theme.typography.h2
  },
  statsContainer: {
    paddingHorizontal: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    marginBottom: 24
  },
  stat: {
    alignItems: 'center'
  },
  statLabel: {
    ...theme.typography.s,
    marginTop: 2
  }
});
