import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';

import { BellIcon, ChevronRightIcon, FileTextIcon, UploadIcon } from '@/components/medimind/icons';
import {
  Avatar,
  BodyText,
  Button,
  Card,
  CardBody,
  CardKicker,
  CardTitle,
  Heading,
  NavTop,
  Screen,
  Tag,
} from '@/components/medimind/ui';
import { Colors, Radius } from '@/constants/medimind-theme';
import { recentReports, userName } from '@/data/mock';

export default function DashboardScreen() {
  return (
    <Screen edges={['top']}>
      <NavTop
        title="MediMind"
        right={
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <Button variant="icon" onPress={() => router.push('/notifications')} icon={<BellIcon size={18} color={Colors.text} />} />
            <Pressable onPress={() => router.push('/(tabs)/profile')}>
              <Avatar initials="AS" size={36} fontSize={13} />
            </Pressable>
          </View>
        }
      />

      <ScrollView contentContainerStyle={styles.content}>
        <View>
          <Heading level={3} style={{ marginBottom: 2 }}>
            Hi, {userName}
          </Heading>
          <BodyText size={13.5} style={{ opacity: 0.7 }}>
            Here&apos;s your health snapshot today.
          </BodyText>
        </View>

        <Pressable onPress={() => router.push('/report-upload')}>
          <Card elevation="md" bg={Colors.accent} row style={{ gap: 14, padding: 20 }}>
            <View style={styles.uploadIconWrap}>
              <UploadIcon size={22} color={Colors.white} strokeWidth={2.75} />
            </View>
            <View style={{ flex: 1 }}>
              <CardTitle color={Colors.white}>Upload Lab Report</CardTitle>
              <BodyText size={12} color={Colors.white} style={{ opacity: 0.85 }}>
                Get an instant read on your results
              </BodyText>
            </View>
            <ChevronRightIcon size={18} color={Colors.white} strokeWidth={2.75} />
          </Card>
        </Pressable>

        <View>
          <View style={styles.sectionHeader}>
            <Heading level={5} style={{ marginBottom: 0 }}>
              Recent Reports
            </Heading>
            <Pressable onPress={() => router.push('/(tabs)/reports')} hitSlop={8}>
              <BodyText color={Colors.accent} size={12}>
                See all
              </BodyText>
            </Pressable>
          </View>
          <View style={{ gap: 10 }}>
            {recentReports.map((r) => (
              <Pressable key={r.id} onPress={() => router.push('/results')}>
                <Card elevation="sm" row style={styles.reportRow}>
                  <View style={styles.reportIconWrap}>
                    <FileTextIcon size={16} color={Colors.accent700} strokeWidth={2.75} />
                  </View>
                  <View style={{ flex: 1 }}>
                    <BodyText size={13} weight="bold">
                      {r.condition}
                    </BodyText>
                    <BodyText size={11.5} style={{ opacity: 0.65 }}>
                      {r.date}
                    </BodyText>
                  </View>
                  <Tag variant="neutral">{r.status}</Tag>
                </Card>
              </Pressable>
            ))}
          </View>
        </View>

        <Card elevation="sm" bg={Colors.accent2_100}>
          <CardKicker color={Colors.accent2_700}>Health Tip</CardKicker>
          <CardBody color={Colors.accent2_800} style={{ opacity: 1 }}>
            15 minutes of morning sunlight helps your body produce natural Vitamin D.
          </CardBody>
        </Card>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: { paddingHorizontal: 20, paddingTop: 14, paddingBottom: 24, gap: 20 },
  uploadIconWrap: {
    width: 46,
    height: 46,
    borderRadius: Radius.pill,
    backgroundColor: 'rgba(255,255,255,0.25)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 10,
  },
  reportRow: { gap: 12, padding: 12 },
  reportIconWrap: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: Colors.accent100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
