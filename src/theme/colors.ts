/**
 * Website Color System
 * 
 * Core brand colors and theme palette for Nextra Systems
 */

export const colors = {
  // Core Brand Colors
  primaryBrand: '#2B3F7C', // Deep Tech Blue
  secondaryBrand: '#3B6987', // Steel Blue
  accent: '#71B8B1', // Teal Cyan
  accentLight: '#479997', // Aqua Teal
  darkBase: '#131E2C', // Midnight Navy
  neutral: '#32415A', // Slate Blue Grey

  // Primary Colors
  primaryBlue: '#2B3F7C',
  secondaryBlue: '#3B6987',

  // Accent Colors
  tealAccent: '#71B8B1',
  softAqua: '#479997',

  // Background Colors
  background: '#FFFFFF',
  backgroundAlt: '#F4F7FB', // Section Background (Alt)
  backgroundDark: '#131E2C', // Dark Sections

  // Text Colors
  textPrimary: '#131E2C',
  textMuted: '#32415A',
} as const;

export const gradients = {
  primaryBrand: 'linear-gradient(135deg, #2B3F7C, #3B6987)',
  tech: 'linear-gradient(135deg, #3B6987, #71B8B1)',
  premium: 'linear-gradient(135deg, #131E2C, #2B3F7C)',
  softUI: 'linear-gradient(135deg, #F4F7FB, #E8F1F4)',
} as const;

/**
 * Recommended usage map for different sections
 */
export const usageMap = {
  headerNavbar: {
    light: colors.background,
    dark: colors.darkBase,
  },
  heroBackground: gradients.primaryBrand,
  primaryCTA: colors.primaryBrand,
  secondaryButton: colors.accent,
  icons: colors.accentLight,
  featureCards: {
    background: colors.background,
    shadow: 'rgba(0, 0, 0, 0.1)',
  },
  footer: colors.darkBase,
} as const;

export type Colors = typeof colors;
export type Gradients = typeof gradients;
