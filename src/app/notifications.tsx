import { router } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';

import { BellIcon, MessageCircleIcon } from '@/components/medimind/icons';
import { BodyText, Heading, Screen, ScreenHeader } from '@/components/medimind/ui';
import { Colors, Radius } from '@/constants/medimind-theme';
import { earlierNotifs, todayNotifs } from '@/data/mock';

export default function NotificationsScreen() {
  return (
    <Screen>
      <ScreenHeader title="Notifications" onBack={() => router.back()} />

      <ScrollView contentContainerStyle={styles.content}>
        <View>
          <Heading level={6} style={{ opacity: 0.55, marginBottom: 8 }}>
            Today
          </Heading>
          <View style={{ gap: 10 }}>
            {todayNotifs.map((n) => (
              <View key={n.id} style={styles.notifRow}>
                <View style={styles.iconWrap}>
                  <BellIcon size={16} color={Colors.accent700} strokeWidth={2.75} />
                </View>
                <View style={{ flex: 1 }}>
                  <BodyText size={13}>{n.text}</BodyText>
                  <BodyText size={11} style={{ opacity: 0.5, marginTop: 2 }}>
                    {n.time}
                  </BodyText>
                </View>
                <View style={styles.dot} />
              </View>
            ))}
          </View>
        </View>

        <View>
          <Heading level={6} style={{ opacity: 0.55, marginBottom: 8 }}>
            Earlier
          </Heading>
          <View style={{ gap: 10 }}>
            {earlierNotifs.map((n) => (
              <View key={n.id} style={[styles.notifRow, { opacity: 0.75 }]}>
                <View style={[styles.iconWrap, { backgroundColor: Colors.accent2_100 }]}>
                  <MessageCircleIcon size={16} color={Colors.accent2_700} strokeWidth={2.75} />
                </View>
                <View style={{ flex: 1 }}>
                  <BodyText size={13}>{n.text}</BodyText>
                  <BodyText size={11} style={{ opacity: 0.5, marginTop: 2 }}>
                    {n.time}
                  </BodyText>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: { paddingHorizontal: 20, paddingTop: 8, paddingBottom: 20, gap: 18 },
  notifRow: { flexDirection: 'row', gap: 12, alignItems: 'flex-start' },
  iconWrap: {
    width: 36,
    height: 36,
    borderRadius: Radius.pill,
    backgroundColor: Colors.accent100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: { width: 8, height: 8, borderRadius: Radius.pill, backgroundColor: Colors.accent, marginTop: 6 },
});
