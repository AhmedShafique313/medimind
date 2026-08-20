import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';

import { FileTextIcon, SearchIcon } from '@/components/medimind/icons';
import { BodyText, Button, Card, NavTop, Screen } from '@/components/medimind/ui';
import { Colors } from '@/constants/medimind-theme';
import { reports } from '@/data/mock';

export default function ReportHistoryScreen() {
  return (
    <Screen edges={['top']}>
      <NavTop
        title="Report History"
        right={<Button variant="icon" icon={<SearchIcon size={18} color={Colors.text} strokeWidth={2.75} />} />}
      />

      <ScrollView contentContainerStyle={styles.list}>
        {reports.map((r) => (
          <Pressable key={r.id} onPress={() => router.push('/results')}>
            <Card elevation="sm" row style={{ gap: 12, padding: 12 }}>
              <View style={styles.iconWrap}>
                <FileTextIcon size={17} color={Colors.accent700} strokeWidth={2.75} />
              </View>
              <View style={{ flex: 1 }}>
                <BodyText size={13} weight="bold" numberOfLines={1}>
                  {r.name}
                </BodyText>
                <BodyText size={11.5} style={{ opacity: 0.6 }}>
                  {r.date} · {r.condition}
                </BodyText>
              </View>
            </Card>
          </Pressable>
        ))}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  list: { paddingHorizontal: 20, paddingTop: 12, paddingBottom: 20, gap: 10 },
  iconWrap: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: Colors.accent100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
