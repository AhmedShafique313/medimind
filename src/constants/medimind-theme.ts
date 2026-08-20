/**
 * MediMind design tokens — light theme only.
 * Ported from the Claude Design handoff (`MediMind App.dc.html` + the
 * "Organic" design-system `styles.css`), with the app's accent colors
 * (#C62368 / #FA7268) substituted for the design-system defaults.
 */

export const Colors = {
  bg: '#ffffff',
  surface: '#f4f4f4',
  text: '#141414',
  divider: 'rgba(0,0,0,0.12)',

  neutral100: '#ffffff',
  neutral200: '#f2f2f2',
  neutral300: '#e2e2e2',
  neutral400: '#c6c6c6',
  neutral500: '#a3a3a3',
  neutral600: '#7d7d7d',
  neutral700: '#585858',
  neutral800: '#333333',
  neutral900: '#181818',

  accent: '#C62368',
  accent100: '#F8E5ED',
  accent200: '#F1C8D9',
  accent300: '#E7A3C0',
  accent400: '#D86998',
  accent500: '#C62368',
  accent600: '#A81E58',
  accent700: '#871847',
  accent800: '#671236',
  accent900: '#4B0D28',

  accent2: '#FA7268',
  accent2_100: '#FEEEED',
  accent2_200: '#FEDCD9',
  accent2_300: '#FDC4C0',
  accent2_400: '#FC9F98',
  accent2_500: '#FA7268',
  accent2_600: '#D56158',
  accent2_700: '#96443E',
  accent2_800: '#71332F',
  accent2_900: '#502421',

  white: '#ffffff',
} as const;

export const Fonts = {
  heading: 'Caprasimo_400Regular',
  body: 'Figtree_400Regular',
  bodyMedium: 'Figtree_600SemiBold',
  bodyBold: 'Figtree_700Bold',
} as const;

export const Radius = {
  sm: 8,
  md: 16,
  lg: 28,
  card: 32,
  pill: 999,
} as const;

export const Space = {
  1: 4,
  2: 9,
  3: 13,
  4: 18,
  6: 26,
  8: 35,
} as const;

export const Shadow = {
  sm: {
    shadowColor: '#2e2b25',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.14,
    shadowRadius: 2,
    elevation: 2,
  },
  md: {
    shadowColor: '#2e2b25',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.16,
    shadowRadius: 10,
    elevation: 5,
  },
  lg: {
    shadowColor: '#2e2b25',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.22,
    shadowRadius: 32,
    elevation: 12,
  },
} as const;
