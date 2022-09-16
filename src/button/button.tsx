import type { TouchableOpacityProps } from 'react-native';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { theme } from '~/theme';

type ButtonProps = TouchableOpacityProps & {
  variant: 'default';
  theme: 'default';
};

export const Button: React.FC<ButtonProps> = ({ children, variant = 'default' }) => {
  return <TouchableOpacity style={[styles[variant]]}>{children}</TouchableOpacity>;
};

const styles = StyleSheet.create({
  default: {
    backgroundColor: theme.colors.primary,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32
  }
});
