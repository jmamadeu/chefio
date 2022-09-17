import type { TouchableOpacityProps } from 'react-native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { theme } from '~/theme';

type ChipProps = TouchableOpacityProps & {
  children: React.ReactNode;
  selected?: boolean;
};

export const Chip: React.FC<ChipProps> = ({ children, selected, style, ...props }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.button, selected ? styles.selected : styles.defaultColor, style]}
      {...props}
    >
      <Text style={[styles.text, selected ? styles.selectedText : styles.textColor]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 48,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24
  },
  text: {
    ...theme.typography.p2
  },
  defaultColor: {
    backgroundColor: theme.colors.grey[100]
  },
  selected: {
    backgroundColor: theme.colors.primary
  },
  selectedText: {
    color: theme.colors.white
  },
  textColor: {
    color: theme.colors.secondaryText
  }
});
