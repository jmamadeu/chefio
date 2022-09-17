import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { TextInput } from '~/components/text-input/text-input';
import { theme } from '~/theme';
import { Chip } from '~/components/button/chips';

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
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
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
      </View>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    flex: 1,
    paddingTop: 16
  },
  paddingHorizontal: {
    marginHorizontal: 24
  },
  headerContainer: {},
  inputSearch: {
    backgroundColor: theme.colors.grey[100]
  },
  categoryContainer: {
    marginTop: 24
  },
  categoryButtons: { flexDirection: 'row', marginTop: 16 },
  categoryButton: {
    marginRight: 16
  }
});
