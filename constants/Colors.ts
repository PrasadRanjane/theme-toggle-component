/**
 * Theme Colors
 * Extracted from pokedex project
 */

export const Colors = {
  light: {
    background: '#f8fafc',
    surface: '#ffffff',
    surfaceVariant: '#f1f5f9',
    text: '#1e293b',
    textSecondary: '#64748b',
    textTertiary: '#94a3b8',
    primary: '#6366f1',
    primaryLight: '#818cf8',
    primaryDark: '#4f46e5',
    accent: '#10b981',
    border: '#e2e8f0',
  },
  dark: {
    background: '#0f172a',
    surface: '#1e293b',
    surfaceVariant: '#334155',
    text: '#f1f5f9',
    textSecondary: '#cbd5e1',
    textTertiary: '#94a3b8',
    primary: '#818cf8',
    primaryLight: '#a5b4fc',
    primaryDark: '#6366f1',
    accent: '#34d399',
    border: '#334155',
  },
};

export type Theme = 'light' | 'dark';
export type ThemeColors = typeof Colors.light;
