import { Feather } from '@expo/vector-icons';
import { FlatList, StyleSheet, Text, View, Platform, NativeModules, StatusBar } from 'react-native';
import { FlashList } from '@shopify/flash-list';

import { TextInput } from '~/components/text-input/text-input';
import { theme } from '~/theme';
import { Chip } from '~/components/button/chips';
import { RecipeCard } from '~/components/recipe-card/recipe-card';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 50 : StatusBar.currentHeight;

const data = [
  {
    label: 'All',
    selected: true
  },
  {
    label: 'Eggs',
    selected: false
  },
  {
    label: 'Food',
    selected: false
  },
  {
    label: 'Drink',
    selected: false
  },
  {
    label: 'Drink',
    selected: false
  },
  {
    label: 'Drink',
    selected: false
  }
];

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.paddingHorizontal}>
        <TextInput
          viewStyle={styles.inputSearch}
          placeholder="Search"
          left={<Feather name="search" size={22} color={theme.colors.blue[100]} />}
        />
      </View>

      <View style={styles.categoryContainer}>
        <View style={styles.paddingHorizontal}>
          <Text style={theme.typography.h2}>Category</Text>
        </View>

        <View style={styles.categoryButtons}>
          <FlatList
            data={data}
            contentContainerStyle={{ paddingHorizontal: 24 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <Chip selected={item.selected} style={styles.categoryButton}>
                {item.label}
              </Chip>
            )}
          />
        </View>
      </View>

      <View style={[styles.paddingHorizontal, styles.recipesContainer]}>
        <FlashList
          renderItem={() => <RecipeCard />}
          estimatedItemSize={50}
          data={[1, 2, 3, 4, 5, 6]}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ height: 32 }} />}
        />
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    flex: 1,
    paddingTop: STATUSBAR_HEIGHT
  },
  paddingHorizontal: {
    marginHorizontal: 24
  },

  inputSearch: {
    backgroundColor: theme.colors.grey[100]
  },
  categoryContainer: {
    marginTop: 24
  },
  categoryButtons: { flexDirection: 'row', marginTop: 16 },
  categoryButton: {
    marginRight: 8
  },
  recipesContainer: {
    marginTop: 30,
    flex: 1
  }
});
