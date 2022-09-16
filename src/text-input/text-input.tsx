import { Feather } from '@expo/vector-icons';
import { Pressable, StyleSheet, View } from 'react-native';

export const TextInput = () => {
  return (
    <View style={styles.textInputContainer}>
      <Feather style={styles.icon} name="lock" size={20} color="#2E3E5C" />
      <TextInput style={styles.input} placeholderTextColor="#9FA5C0" placeholder="Password" />
      <Pressable onPress={togglePasswordShow}>
        <Feather
          style={styles.iconLeft}
          name={`${isShownPassword ? 'eye' : 'eye-off'}`}
          size={20}
          color="#2E3E5C"
        />
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
