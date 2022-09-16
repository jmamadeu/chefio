import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button, ButtonText } from '~/button/button';
import type { RootStackParamList } from '~/routes/router';
import { theme } from '~/theme';

type SignInScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SignIn'>;

export const SignInScreen = () => {
  const navigate = useNavigation<SignInScreenNavigationProp>();

  const handleSocialLoginButtonClick = () => {
    navigate.navigate('Home');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Welcome Back!</Text>
          <Text style={theme.typography.p2}>Please enter with your favorite account</Text>
        </View>

        <View style={styles.buttonsContainer}>
          <Button
            onPress={handleSocialLoginButtonClick}
            style={[styles.getStartedButton]}
            activeOpacity={0.8}
          >
            <FontAwesome name="facebook" size={18} color={theme.colors.white} />

            <ButtonText style={styles.buttonText}>Facebook</ButtonText>
          </Button>

          <View style={styles.divider} />

          <Button
            onPress={handleSocialLoginButtonClick}
            style={styles.googleButton}
            activeOpacity={0.8}
          >
            <FontAwesome name="google" size={18} color={theme.colors.white} />
            <ButtonText style={styles.buttonText}>Google</ButtonText>
          </Button>

          <View style={styles.divider} />

          <Button
            onPress={handleSocialLoginButtonClick}
            style={styles.appleButton}
            activeOpacity={0.8}
          >
            <FontAwesome name="apple" size={18} color={theme.colors.white} />
            <ButtonText style={styles.buttonText}>Apple</ButtonText>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    flex: 1,
    justifyContent: 'center'
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 32
  },
  welcomeText: {
    marginBottom: 8,
    ...theme.typography.h1
  },

  divider: {
    marginVertical: 10
  },

  buttonsContainer: {
    marginTop: 70
  },
  getStartedButton: {
    backgroundColor: theme.colors.social.facebook
  },
  googleButton: {
    backgroundColor: theme.colors.social.google
  },
  appleButton: {
    backgroundColor: theme.colors.black
  },
  buttonText: {
    color: theme.colors.white,
    marginLeft: 10
  }
});
