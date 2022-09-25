import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { FlashList } from '@shopify/flash-list';

import { ProfileBannerCard } from './components/banner';

import { useGetStatusBarHeight } from '~/hooks/usse-get-status-bar-height';
import { theme } from '~/theme';
import { RecipeCard } from '~/components/recipe-card/recipe-card';
import { Chip } from '~/components/button/chips';

export const ProfileScreen = () => {
  const StatusbarHeight = useGetStatusBarHeight();
  return (
    <View style={styles.container}>
      <View style={[{ paddingTop: StatusbarHeight }, styles.banner]}>
        <ProfileBannerCard />
      </View>

      <View style={styles.line} />

      <View style={{ flexDirection: 'row', paddingLeft: 24, marginTop: 24 }}>
        <Chip selected>My recipes (20)</Chip>
        <View style={{ marginLeft: 8 }}>
          <Chip outlined>Liked (10)</Chip>
        </View>
      </View>

      <View style={styles.recipesList}>
        <FlashList
          centerContent
          renderItem={() => <RecipeCard authorShown={false} />}
          estimatedItemSize={50}
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white
  },
  banner: {
    backgroundColor: theme.colors.white
  },
  line: {
    backgroundColor: theme.colors.form,
    height: 8
  },
  recipesList: {
    marginTop: 24,
    flex: 1,
    paddingHorizontal: 24
  }
});
