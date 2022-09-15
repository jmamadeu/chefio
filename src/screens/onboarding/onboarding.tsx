import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import type { RootStackParamList } from '~/routes/router';

const OnboardingImg = require('../../assets/Onboarding.png');

type OnboardingScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Onboarding'>;

export const OnboardingScreen = () => {
  const navigation = useNavigation<OnboardingScreenNavigationProp>();

  const handleButtonClick = () => {
    navigation.navigate('SignIn');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={OnboardingImg} style={styles.image} />

      <View style={styles.contentContainer}>
        <Text style={styles.mainText}>Start Cooking</Text>
        <Text style={styles.secondaryText}>
          Let&apos;s join our community {`\n`} to cook better food!
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={handleButtonClick}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
    color: '#2E3E5C',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 16
  },
  secondaryText: {
    color: '#9FA5C0',
    fontSize: 17,
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: 27
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 24
  },
  button: {
    backgroundColor: '#1FCC79',
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15
  }
});
