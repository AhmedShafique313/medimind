import { Link, router } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';

import { BodyText, Button, Field, Heading, Screen } from '@/components/medimind/ui';

export default function SignupScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <Heading level={3} style={{ marginBottom: 6 }}>
          Create your account
        </Heading>
        <BodyText size={14} style={{ opacity: 0.7, marginBottom: 24 }}>
          Takes less than a minute.
        </BodyText>

        <View style={{ gap: 14, marginBottom: 20 }}>
          <Field label="Full Name" placeholder="Aisha Sharma" value={name} onChangeText={setName} />
          <Field label="Email" placeholder="you@example.com" autoCapitalize="none" value={email} onChangeText={setEmail} />
          <Field label="Password" placeholder="••••••••" secureTextEntry value={password} onChangeText={setPassword} />
          <Field
            label="Confirm Password"
            placeholder="••••••••"
            secureTextEntry
            value={confirm}
            onChangeText={setConfirm}
          />
        </View>

        <Button label="Create Account" variant="primary" block onPress={() => router.replace('/(tabs)')} />

        <View style={styles.loginRow}>
          <BodyText size={13} style={{ opacity: 0.75 }}>
            Already have an account?{' '}
          </BodyText>
          <Link href="/login" asChild>
            <Pressable hitSlop={8}>
              <BodyText size={13} weight="bold">
                Log in
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
  loginRow: { flexDirection: 'row', justifyContent: 'center', marginTop: 20 },
});
