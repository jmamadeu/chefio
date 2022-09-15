import { Feather } from '@expo/vector-icons';
import { useReducer } from 'react';
import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const SignInScreen = () => {
  const [isShownPassword, togglePasswordShow] = useReducer((isShown) => !isShown, false);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Welcome Back!</Text>
          <Text style={styles.secondaryWelcomeText}>Please enter your account here</Text>
        </View>
        <View>
          <View style={styles.textInputContainer}>
            <Feather style={styles.icon} name="mail" size={20} color="#2E3E5C" />
            <TextInput
              style={styles.input}
              placeholderTextColor="#9FA5C0"
              placeholder="Email or phone number"
            />
          </View>

          <View style={styles.textInputContainer}>
            <Feather style={styles.icon} name="lock" size={20} color="#2E3E5C" />
            <TextInput
              textContentType="password"
              secureTextEntry={!isShownPassword}
              style={styles.input}
              placeholderTextColor="#9FA5C0"
              placeholder="Password"
            />
            <Pressable onPress={togglePasswordShow}>
              <Feather
                style={styles.iconLeft}
                name={`${isShownPassword ? 'eye' : 'eye-off'}`}
                size={20}
                color="#2E3E5C"
              />
            </Pressable>
          </View>

          <Pressable style={styles.forgetPassword}>
            <Text style={styles.forgetPasswordText}>Forgot password?</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.button, styles.getStartedButton]} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>

        <Text style={styles.continueText}>Or Continue with</Text>

        <TouchableOpacity style={[styles.button, styles.googleButton]} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Google</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.anyAccount}>
        <Text style={styles.anyAccountText}>Don&apos;t have any account?</Text>
        <Text style={styles.signUpText}>SignUp</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    marginTop: 100
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 32
  },
  welcomeText: {
    color: '#2E3E5C',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 8,
    lineHeight: 32
  },
  secondaryWelcomeText: {
    color: '#9FA5C0',
    fontSize: 15,
    lineHeight: 25
  },

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
  },
  icon: {
    marginLeft: 24
  },
  iconLeft: {
    marginRight: 24
  },
  forgetPassword: {
    alignSelf: 'flex-end',
    marginTop: 24
  },
  forgetPasswordText: {
    color: '#2E3E5C',
    fontSize: 15,
    fontWeight: '500'
  },
  buttonsContainer: {
    marginTop: 70
  },
  button: {
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32
  },
  getStartedButton: {
    backgroundColor: '#1FCC79'
  },
  googleButton: {
    backgroundColor: '#FF5842'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15
  },
  continueText: {
    color: '#9FA5C0',
    textAlign: 'center',
    marginVertical: 24,
    fontWeight: '500',
    fontSize: 15
  },
  anyAccount: {
    marginTop: 24,

    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  anyAccountText: {
    color: '#2E3E5C',

    fontSize: 15,
    fontWeight: '500',
    lineHeight: 25,

    marginRight: 4
  },
  signUpText: {
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 25,
    color: '#1FCC79'
  }
});
