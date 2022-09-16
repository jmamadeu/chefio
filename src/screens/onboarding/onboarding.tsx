import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

import { Button, ButtonText } from '~/components/button/button';
import type { RootStackParamList } from '~/routes';
import { theme } from '~/theme';

const OnboardingImg = require('../../assets/Onboarding.png');

type OnboardingScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Onboarding'>;

export const OnboardingScreen = () => {
  const navigation = useNavigation<OnboardingScreenNavigationProp>();

  const handleButtonClick = () => {
    navigation.navigate('SignIn');
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Image source={OnboardingImg} style={styles.image} />

        <View style={styles.contentContainer}>
          <Text style={styles.mainText}>Start Cooking</Text>
          <Text style={styles.secondaryText}>
            Let&apos;s join our community {`\n`} to cook better food!
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button style={styles.button} activeOpacity={0.8} onPress={handleButtonClick}>
            <ButtonText>Get Started</ButtonText>
          </Button>
        </View>
      </SafeAreaView>

      <StatusBar barStyle="dark-content" />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  image: {
    width: '100%'
  },
  contentContainer: {
    alignItems: 'center'
  },
  mainText: {
    marginBottom: 16,
    ...theme.typography.h1
  },
  secondaryText: {
    textAlign: 'center',
    ...theme.typography.p1
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 24
  },
  button: {
    backgroundColor: theme.colors.primary
  }
});
