import type { TextInputProps as RNTextInputProps, ViewStyle } from 'react-native';
import { StyleSheet, TextInput as RNTextInput, View } from 'react-native';

import { theme } from '~/theme';

type TextInputProps = RNTextInputProps & {
  right?: React.ReactNode;
  left?: React.ReactNode;
  viewStyle?: ViewStyle;
};

export const TextInput: React.FC<TextInputProps> = ({ right, left, style, viewStyle, ...rest }) => {
  return (
    <View style={[styles.textInputContainer, viewStyle]}>
      {left && <View style={styles.left}>{left}</View>}
      <RNTextInput
        style={[styles.input, style]}
        placeholderTextColor={theme.colors.secondaryText}
        {...rest}
      />
      {right && <View style={styles.right}>{right}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    borderRadius: 32,
    borderWidth: 1,
    borderColor: theme.colors.outline,
    flexDirection: 'row',
    alignItems: 'center'
  },
  left: {
    marginLeft: 27
  },
  right: {
    marginRight: 27
  },
  input: {
    flex: 1,
    height: 56,
    paddingLeft: 10,
    fontSize: 15,
    fontFamily: theme.fonts.Medium,
    color: theme.colors.primary
  }
});
