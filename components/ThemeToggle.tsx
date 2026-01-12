/**
 * ThemeToggle Component
 * 
 * A reusable theme toggle button for switching between light and dark modes.
 * Extracted from pokedex project.
 * 
 * @param size - Size variant: 'small' | 'default' | 'large'
 * @param style - Optional custom styles
 * @param onToggle - Optional callback when theme is toggled
 */

import React from 'react';
import { TouchableOpacity, StyleSheet, useColorScheme } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export type ThemeToggleSize = 'small' | 'default' | 'large';

interface ThemeToggleProps {
  size?: ThemeToggleSize;
  style?: any;
  onToggle?: () => void;
  theme?: 'light' | 'dark';
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  size = 'default',
  style,
  onToggle,
  theme,
}) => {
  const systemColorScheme = useColorScheme();
  const isDark = theme === 'dark' || (!theme && systemColorScheme === 'dark');

  const sizeConfig = {
    small: {
      size: 20,
      padding: 8,
      borderRadius: 16,
    },
    default: {
      size: 28,
      padding: 10,
      borderRadius: 20,
    },
    large: {
      size: 36,
      padding: 12,
      borderRadius: 24,
    },
  };

  const config = sizeConfig[size];

  return (
    <TouchableOpacity
      style={[
        styles.themeToggle,
        {
          padding: config.padding,
          borderRadius: config.borderRadius,
        },
        style,
      ]}
      onPress={onToggle}
      activeOpacity={0.7}
    >
      <MaterialIcons
        name={isDark ? 'light-mode' : 'dark-mode'}
        size={config.size}
        color="white"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  themeToggle: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
