import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { FileTextIcon, UploadIcon, XIcon } from '@/components/medimind/icons';
import { BodyText, Button, Card, Screen, ScreenHeader } from '@/components/medimind/ui';
import { Colors } from '@/constants/medimind-theme';

export default function ReportUploadScreen() {
  const [file, setFile] = useState<{ name: string; size: string } | null>({
    name: 'Blood_Panel_Aug2026.pdf',
    size: '2.1 MB',
  });

  return (
    <Screen>
      <ScreenHeader title="Upload Lab Report" onBack={() => router.back()} />

      <View style={styles.content}>
        <Pressable
          style={styles.dropzone}
          onPress={() => setFile({ name: 'Blood_Panel_Aug2026.pdf', size: '2.1 MB' })}>
          <UploadIcon size={40} color={Colors.accent700} strokeWidth={2.75} />
          <View style={{ alignItems: 'center', gap: 2 }}>
            <BodyText size={14} weight="bold">
              Drag &amp; drop your PDF
            </BodyText>
            <BodyText size={12.5} style={{ opacity: 0.65 }}>
              or choose a file from your device
            </BodyText>
          </View>
          <Button label="Choose File" variant="secondary" onPress={() => setFile({ name: 'Blood_Panel_Aug2026.pdf', size: '2.1 MB' })} />
        </Pressable>

        {file ? (
          <Card elevation="sm" row style={{ gap: 12, padding: 12 }}>
            <FileTextIcon size={20} color={Colors.accent700} strokeWidth={2.75} />
            <View style={{ flex: 1 }}>
              <BodyText size={13} weight="bold" numberOfLines={1}>
                {file.name}
              </BodyText>
              <BodyText size={11.5} style={{ opacity: 0.6 }}>
                {file.size}
              </BodyText>
            </View>
            <Pressable onPress={() => setFile(null)} hitSlop={8}>
              <XIcon size={16} color={Colors.text} strokeWidth={2.75} />
            </Pressable>
          </Card>
        ) : null}

        <BodyText size={11.5} style={{ opacity: 0.55, textAlign: 'center' }}>
          Supported format: PDF · Max size 10MB
        </BodyText>
      </View>

      <View style={styles.footer}>
        <Button
          label="Analyze Report"
          variant="primary"
          block
          disabled={!file}
          onPress={() => router.push('/analyzing')}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: { flex: 1, paddingHorizontal: 24, paddingTop: 16, gap: 20 },
  dropzone: {
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: Colors.divider,
    borderRadius: 24,
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    gap: 14,
  },
  footer: { paddingHorizontal: 24, paddingBottom: 28 },
});
