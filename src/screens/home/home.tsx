import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

import { TextInput } from '~/components/text-input/text-input';
import { theme } from '~/theme';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TextInput
          viewStyle={styles.inputSearch}
          placeholder="Search"
          left={<Feather name="search" size={22} color={theme.colors.blue[100]} />}
        />
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
  headerContainer: {
    marginHorizontal: 24
  },
  inputSearch: {
    backgroundColor: theme.colors.grey[100]
  }
});
