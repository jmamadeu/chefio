import { StyleSheet } from 'react-native';

import { colors } from './colors';

export const typography = StyleSheet.create({
  h1: {
    lineHeight: 32,
    fontSize: 22,
    fontFamily: 'Inter-Bold',

    color: colors.mainText
  },
  h2: {
    lineHeight: 27,
    fontSize: 17,
    fontFamily: 'Inter-Bold',

    color: colors.mainText
  },
  h3: {
    lineHeight: 25,
    fontSize: 15,
    fontFamily: 'Inter-Bold',

    color: colors.mainText
  },
  p1: {
    lineHeight: 27,
    fontSize: 17,
    fontFamily: 'Inter-Medium',

    color: colors.secondaryText
  },
  p2: {
    lineHeight: 25,
    fontSize: 15,
    fontFamily: 'Inter-Medium',

    color: colors.secondaryText
  },
  s: {
    lineHeight: 15,
    fontSize: 12,
    fontFamily: 'Inter-Medium',

    color: colors.secondaryText
  }
});
