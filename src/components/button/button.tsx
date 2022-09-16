import type { TextProps, TouchableOpacityProps } from 'react-native';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { theme } from '~/theme';

type ButtonProps = TouchableOpacityProps & {
  variant?: 'default';
  theme?: 'green' | 'danger' | 'grey';
};

type ButtonTextProps = TextProps & {
  children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'default',
  style,
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles.button, style]} {...props}>
      {children}
    </TouchableOpacity>
  );
};

export const ButtonText: React.FC<ButtonTextProps> = ({ children, style, ...props }) => {
  return (
    <Text style={[styles.buttonText, style]} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
    flexDirection: 'row'
  },

  buttonText: {
    ...theme.typography.p2,
    fontFamily: theme.fonts.Medium,
    color: theme.colors.white
  }
});
