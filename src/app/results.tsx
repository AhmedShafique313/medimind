import { router } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';

import { StethoscopeIcon } from '@/components/medimind/icons';
import {
  BodyText,
  Button,
  Card,
  CardTitle,
  Heading,
  Screen,
  ScreenHeader,
  Tag,
} from '@/components/medimind/ui';
import { Colors } from '@/constants/medimind-theme';
import { condition, keyMetrics, specialty } from '@/data/mock';

function flagVariant(flag: string): 'accent' | 'neutral' {
  return flag === 'Low' ? 'accent' : 'neutral';
}

export default function ResultsScreen() {
  return (
    <Screen>
      <ScreenHeader title="Results" onBack={() => router.back()} />

      <ScrollView contentContainerStyle={styles.content}>
        <Card elevation="md">
          <Tag variant="accent2" style={{ alignSelf: 'flex-start' }}>
            Primary Finding
          </Tag>
          <CardTitle style={{ fontSize: 22, marginTop: 6 }}>{condition}</CardTitle>
          <Tag variant="outline" style={{ alignSelf: 'flex-start', marginTop: 2 }}>
            87% confidence
          </Tag>
          <BodyText size={13} style={{ opacity: 0.8, marginTop: 10 }}>
            Your report shows a below-range Vitamin D level. This is common and very manageable
            with supplementation and sunlight exposure.
          </BodyText>
        </Card>

        <View>
          <Heading level={5} style={{ marginBottom: 8 }}>
            Key Metrics
          </Heading>
          <View style={styles.table}>
            <View style={styles.tableHeaderRow}>
              <BodyText size={11} style={[styles.th, { flex: 1.4 }]}>MARKER</BodyText>
              <BodyText size={11} style={[styles.th, { flex: 1.2 }]}>VALUE</BodyText>
              <BodyText size={11} style={styles.th}>FLAG</BodyText>
            </View>
            {keyMetrics.map((m) => (
              <View key={m.marker} style={styles.tableRow}>
                <BodyText size={13} style={{ flex: 1.4 }}>
                  {m.marker}
                </BodyText>
                <BodyText size={13} style={{ flex: 1.2 }}>
                  {m.value}
                </BodyText>
                <View style={{ flex: 1 }}>
                  <Tag variant={flagVariant(m.flag)}>{m.flag}</Tag>
                </View>
              </View>
            ))}
          </View>
        </View>

        <Card elevation="sm" row style={{ gap: 12 }}>
          <View style={styles.specialistIconWrap}>
            <StethoscopeIcon size={19} color={Colors.accent700} strokeWidth={2.75} />
          </View>
          <View style={{ flex: 1 }}>
            <BodyText size={12} style={{ opacity: 0.6 }}>
              Recommended specialist
            </BodyText>
            <BodyText size={14} weight="bold">
              {specialty}
            </BodyText>
          </View>
        </Card>
      </ScrollView>

      <View style={styles.footer}>
        <Button label="Find Specialists" variant="primary" block onPress={() => router.push('/doctors')} />
        <Button
          label="Save to My Reports"
          variant="ghost"
          onPress={() => router.replace('/(tabs)')}
          style={{ alignSelf: 'center' }}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: { paddingHorizontal: 20, paddingTop: 12, paddingBottom: 24, gap: 16 },
  table: { gap: 0 },
  tableHeaderRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider,
    paddingVertical: 9,
  },
  th: { flex: 1, opacity: 0.6, letterSpacing: 0.6 },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(20,20,20,0.08)',
    paddingVertical: 9,
  },
  specialistIconWrap: {
    width: 40,
    height: 40,
    borderRadius: 999,
    backgroundColor: Colors.accent100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: { paddingHorizontal: 20, paddingBottom: 26, gap: 8 },
});
