import { Link, router } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';

import { BodyText, Button, Field, Heading } from '@/components/medimind/ui';
import { Colors } from '@/constants/medimind-theme';
import { Screen } from '@/components/medimind/ui';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <Heading level={3} style={{ marginBottom: 6 }}>
          Welcome back
        </Heading>
        <BodyText size={14} style={{ opacity: 0.7, marginBottom: 28 }}>
          Log in to check on your reports and appointments.
        </BodyText>

        <View style={{ gap: 16, marginBottom: 8 }}>
          <Field label="Email" placeholder="you@example.com" autoCapitalize="none" value={email} onChangeText={setEmail} />
          <Field label="Password" placeholder="••••••••" secureTextEntry value={password} onChangeText={setPassword} />
        </View>

        <Pressable style={styles.forgot} hitSlop={8}>
          <BodyText color={Colors.accent} size={12.5}>
            Forgot password?
          </BodyText>
        </Pressable>

        <Button label="Log In" variant="primary" block onPress={() => router.replace('/(tabs)')} />

        <View style={styles.signupRow}>
          <BodyText size={13} style={{ opacity: 0.75 }}>
            Don&apos;t have an account?{' '}
          </BodyText>
          <Link href="/signup" asChild>
            <Pressable hitSlop={8}>
              <BodyText size={13} weight="bold">
                Sign up
              </BodyText>
            </Pressable>
          </Link>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: { paddingHorizontal: 28, paddingTop: 40, paddingBottom: 20 },
  forgot: { alignItems: 'flex-end', marginBottom: 22 },
  signupRow: { flexDirection: 'row', justifyContent: 'center', marginTop: 20 },
});
