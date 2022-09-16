import { Feather } from '@expo/vector-icons';
import { Pressable, StyleSheet, TextInput as RNTextInput, View } from 'react-native';

export const TextInput = () => {
  return (
    <View style={styles.textInputContainer}>
      <Feather name="lock" size={20} color="#2E3E5C" />
      <RNTextInput style={styles.input} placeholderTextColor="#9FA5C0" placeholder="Password" />
      <Pressable>
        <Feather name="eye" size={20} color="#2E3E5C" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    borderRadius: 32,
    borderWidth: 1,
    borderColor: '#D0DBEA',
    flexDirection: 'row',
    alignItems: 'center',

    marginBottom: 16
  },
  input: {
    flex: 1,
    height: 56,
    paddingLeft: 10,
    fontSize: 15,
    fontWeight: '400',
    color: '#3E5481'
  }
});
