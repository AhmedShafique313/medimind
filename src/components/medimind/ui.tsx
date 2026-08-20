import { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextProps,
  View,
  ViewProps,
} from 'react-native';
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context';

import { Colors, Fonts, Radius, Shadow, Space } from '@/constants/medimind-theme';
import { ChevronLeftIcon } from '@/components/medimind/icons';

// ── Screen wrapper ──────────────────────────────────────────────────────

export function Screen({ style, children, ...rest }: SafeAreaViewProps) {
  return (
    <SafeAreaView style={[{ flex: 1, backgroundColor: Colors.bg }, style]} {...rest}>
      {children}
    </SafeAreaView>
  );
}

// ── Typography ──────────────────────────────────────────────────────────

type HeadingProps = TextProps & { level?: 1 | 2 | 3 | 4 | 5 | 6; color?: string };

const headingSizes: Record<number, number> = {
  1: 38,
  2: 32,
  3: 25,
  4: 20,
  5: 16,
  6: 13,
};

export function Heading({ level = 3, color = Colors.text, style, ...rest }: HeadingProps) {
  return (
    <Text
      style={[
        {
          fontFamily: Fonts.heading,
          fontSize: headingSizes[level],
          color,
          letterSpacing: -0.2,
          ...(level === 6 ? { letterSpacing: 1, textTransform: 'uppercase' as const } : null),
        },
        style,
      ]}
      {...rest}
    />
  );
}

type BodyTextProps = TextProps & { color?: string; size?: number; weight?: 'regular' | 'medium' | 'bold' };

export function BodyText({
  color = Colors.text,
  size = 14,
  weight = 'regular',
  style,
  ...rest
}: BodyTextProps) {
  const fontFamily =
    weight === 'bold' ? Fonts.bodyBold : weight === 'medium' ? Fonts.bodyMedium : Fonts.body;
  return <Text style={[{ fontFamily, fontSize: size, color }, style]} {...rest} />;
}

// ── Buttons ─────────────────────────────────────────────────────────────

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'icon';

type ButtonProps = {
  label?: string;
  onPress?: () => void;
  variant?: ButtonVariant;
  icon?: React.ReactNode;
  block?: boolean;
  disabled?: boolean;
  style?: ViewProps['style'];
  textColor?: string;
};

export function Button({
  label,
  onPress,
  variant = 'primary',
  icon,
  block,
  disabled,
  style,
  textColor,
}: ButtonProps) {
  const variantStyle =
    variant === 'primary'
      ? styles.btnPrimary
      : variant === 'secondary'
        ? styles.btnSecondary
        : variant === 'icon'
          ? styles.btnIconOnly
          : styles.btnGhost;

  const labelColor =
    textColor ??
    (variant === 'primary' ? Colors.white : variant === 'ghost' ? Colors.accent : Colors.text);

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.btnBase,
        variantStyle,
        block && styles.btnBlock,
        variant === 'icon' && styles.btnIconSize,
        disabled && { opacity: 0.45 },
        pressed && !disabled && { opacity: 0.85 },
        style,
      ]}>
      {icon}
      {label ? (
        <Text style={{ fontFamily: Fonts.heading, fontSize: 14, color: labelColor }}>{label}</Text>
      ) : null}
    </Pressable>
  );
}

// ── Card ────────────────────────────────────────────────────────────────

type CardProps = ViewProps & { elevation?: 'sm' | 'md' | 'lg' | 'none'; bg?: string; row?: boolean };

export function Card({ elevation = 'none', bg = Colors.surface, row, style, children, ...rest }: CardProps) {
  return (
    <View
      style={[
        styles.card,
        { backgroundColor: bg },
        elevation !== 'none' && Shadow[elevation],
        row && { flexDirection: 'row', alignItems: 'center' },
        style,
      ]}
      {...rest}>
      {children}
    </View>
  );
}

export function CardKicker({ children, color = Colors.accent }: { children: React.ReactNode; color?: string }) {
  return (
    <Text style={{ fontFamily: Fonts.body, fontSize: 10, letterSpacing: 1.2, textTransform: 'uppercase', color }}>
      {children}
    </Text>
  );
}

export function CardTitle({ children, color = Colors.text, style }: { children: React.ReactNode; color?: string; style?: TextProps['style'] }) {
  return <Text style={[{ fontFamily: Fonts.heading, fontSize: 17, color }, style]}>{children}</Text>;
}

export function CardBody({ children, color = Colors.text, style }: { children: React.ReactNode; color?: string; style?: TextProps['style'] }) {
  return <Text style={[{ fontFamily: Fonts.body, fontSize: 13, color, opacity: 0.8 }, style]}>{children}</Text>;
}

// ── Tag ─────────────────────────────────────────────────────────────────

type TagVariant = 'accent' | 'accent2' | 'neutral' | 'outline' | 'solid';

export function Tag({
  children,
  variant = 'neutral',
  style,
}: {
  children: React.ReactNode;
  variant?: TagVariant;
  style?: ViewProps['style'];
}) {
  const variantStyle =
    variant === 'accent'
      ? { backgroundColor: Colors.accent100 }
      : variant === 'accent2'
        ? { backgroundColor: Colors.accent2_100 }
        : variant === 'outline'
          ? { borderWidth: 1, borderColor: Colors.accent, backgroundColor: 'transparent' }
          : variant === 'solid'
            ? { backgroundColor: Colors.accent }
            : { backgroundColor: Colors.neutral100 };

  const textColor =
    variant === 'accent'
      ? Colors.accent800
      : variant === 'accent2'
        ? Colors.accent2_800
        : variant === 'outline'
          ? Colors.accent
          : variant === 'solid'
            ? Colors.white
            : Colors.neutral800;

  return (
    <View style={[styles.tag, variantStyle, style]}>
      <Text style={{ fontFamily: Fonts.body, fontSize: 11, color: textColor, letterSpacing: 0.2 }}>{children}</Text>
    </View>
  );
}

// ── Input ───────────────────────────────────────────────────────────────

type FieldProps = TextInputProps & { label?: string };

export function Field({ label, style, ...rest }: FieldProps) {
  return (
    <View style={{ gap: 5 }}>
      {label ? <Text style={styles.fieldLabel}>{label}</Text> : null}
      <TextInput
        placeholderTextColor={Colors.neutral500}
        style={[styles.input, style]}
        {...rest}
      />
    </View>
  );
}

// ── Avatar ──────────────────────────────────────────────────────────────

export function Avatar({
  initials,
  size = 40,
  fontSize = 13,
}: {
  initials: string;
  size?: number;
  fontSize?: number;
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: Radius.pill,
        backgroundColor: Colors.accent2_200,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{ fontFamily: Fonts.heading, fontSize, color: Colors.accent2_800 }}>{initials}</Text>
    </View>
  );
}

// ── Screen header (back button + title) ───────────────────────────────

export function ScreenHeader({
  title,
  onBack,
  right,
}: {
  title?: string;
  onBack?: () => void;
  right?: React.ReactNode;
}) {
  return (
    <View style={styles.header}>
      {onBack ? (
        <Pressable onPress={onBack} style={styles.backBtn} hitSlop={8}>
          <ChevronLeftIcon size={16} color={Colors.text} />
        </Pressable>
      ) : null}
      {title ? <Heading level={4}>{title}</Heading> : null}
      {right ? <View style={{ marginLeft: 'auto' }}>{right}</View> : null}
    </View>
  );
}

// ── Top nav (brand + trailing icon) ────────────────────────────────────

export function NavTop({ title, right }: { title: string; right?: React.ReactNode }) {
  return (
    <View style={styles.navTop}>
      <Text style={{ fontFamily: Fonts.heading, fontSize: 16, color: Colors.text }}>{title}</Text>
      {right ? <View style={{ marginLeft: 'auto' }}>{right}</View> : null}
    </View>
  );
}

// ── Toggle switch ───────────────────────────────────────────────────────

export function Toggle({ initial = true }: { initial?: boolean }) {
  const [on, setOn] = useState(initial);
  return (
    <Pressable
      onPress={() => setOn((v) => !v)}
      style={[styles.toggleTrack, { backgroundColor: on ? Colors.accent : Colors.neutral400 }]}>
      <View style={[styles.toggleThumb, { alignSelf: on ? 'flex-end' : 'flex-start' }]} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btnBase: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    borderRadius: Radius.pill,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  btnPrimary: { backgroundColor: Colors.accent },
  btnSecondary: { borderWidth: 1, borderColor: Colors.divider, backgroundColor: 'transparent' },
  btnGhost: { backgroundColor: 'transparent', paddingHorizontal: 4, paddingVertical: 4 },
  btnIconOnly: { borderWidth: 1, borderColor: Colors.divider, backgroundColor: 'transparent', paddingHorizontal: 0 },
  btnIconSize: { width: 44, height: 44 },
  btnBlock: { width: '100%' },
  card: {
    borderRadius: Radius.card,
    padding: Space[3],
    gap: Space[2],
  },
  tag: {
    borderRadius: Radius.md * 0.75,
    paddingVertical: 3,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  fieldLabel: {
    fontFamily: Fonts.body,
    fontSize: 12,
    color: 'rgba(20,20,20,0.7)',
  },
  input: {
    width: '100%',
    minHeight: 44,
    paddingVertical: 10,
    paddingHorizontal: 16,
    fontFamily: Fonts.body,
    fontSize: 14,
    color: Colors.text,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.divider,
    borderRadius: Radius.pill,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 8,
  },
  backBtn: {
    width: 36,
    height: 36,
    borderRadius: Radius.pill,
    borderWidth: 1,
    borderColor: Colors.divider,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 6,
  },
  toggleTrack: {
    width: 44,
    height: 26,
    borderRadius: Radius.pill,
    padding: 3,
    justifyContent: 'center',
  },
  toggleThumb: {
    width: 20,
    height: 20,
    borderRadius: Radius.pill,
    backgroundColor: Colors.white,
  },
});
