import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';

import { ChevronRightIcon } from '@/components/medimind/icons';
import { Avatar, BodyText, Button, Card, CardKicker, Heading, NavTop, Screen, Toggle } from '@/components/medimind/ui';
import { Colors } from '@/constants/medimind-theme';
import { userEmail, userName } from '@/data/mock';

function SettingsRow({
  label,
  onPress,
  divider = true,
  trailing,
}: {
  label: string;
  onPress?: () => void;
  divider?: boolean;
  trailing?: React.ReactNode;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.settingsRow, divider && { borderBottomWidth: 1, borderBottomColor: Colors.divider }]}>
      <BodyText size={13.5}>{label}</BodyText>
      {trailing ?? <ChevronRightIcon size={15} color={Colors.text} strokeWidth={2.75} />}
    </Pressable>
  );
}

export default function ProfileScreen() {
  return (
    <Screen edges={['top']}>
      <NavTop title="Profile" />

      <ScrollView contentContainerStyle={styles.content}>
        <View style={{ alignItems: 'center', gap: 8 }}>
          <Avatar initials="AS" size={72} fontSize={22} />
          <Heading level={4} style={{ marginTop: 6 }}>
            {userName === 'Aisha' ? 'Aisha Sharma' : userName}
          </Heading>
          <BodyText size={12.5} style={{ opacity: 0.6 }}>
            {userEmail}
          </BodyText>
          <Button label="Edit Profile" variant="secondary" style={{ paddingVertical: 6, paddingHorizontal: 16 }} />
        </View>

        <Card elevation="sm">
          <CardKicker>Personal Info</CardKicker>
          <View style={styles.infoRow}>
            <BodyText size={13} style={{ opacity: 0.6 }}>
              Age
            </BodyText>
            <BodyText size={13} weight="bold">
              29
            </BodyText>
          </View>
          <View style={styles.infoRow}>
            <BodyText size={13} style={{ opacity: 0.6 }}>
              Gender
            </BodyText>
            <BodyText size={13} weight="bold">
              Female
            </BodyText>
          </View>
          <View style={styles.infoRow}>
            <BodyText size={13} style={{ opacity: 0.6 }}>
              Phone
            </BodyText>
            <BodyText size={13} weight="bold">
              +91 98xxxxx210
            </BodyText>
          </View>
        </Card>

        <View>
          <SettingsRow label="Medical History" />
          <SettingsRow label="Linked Reports" divider={false} />
        </View>

        <View>
          <CardKicker>App Settings</CardKicker>
          <View style={{ marginTop: 6 }}>
            <SettingsRow label="Notifications" divider={false} trailing={<Toggle initial />} />
            <SettingsRow label="Privacy" />
            <SettingsRow label="Help & Support" divider={false} />
          </View>
        </View>

        <Button
          label="Log Out"
          variant="secondary"
          block
          textColor={Colors.accent700}
          onPress={() => router.replace('/login')}
        />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: { paddingHorizontal: 22, paddingTop: 8, paddingBottom: 20, gap: 18 },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 2 },
  settingsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
});
