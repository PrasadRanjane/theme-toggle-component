/**
 * ThemeToggle Component - Expo UI Version
 * 
 * Testing @expo/ui compatibility
 * Falls back to standard implementation if @expo/ui doesn't work
 */

import React from 'react';
import { TouchableOpacity, StyleSheet, useColorScheme, View, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

// Try to import @expo/ui components
let ExpoUI: any = null;
let ExpoUIButton: any = null;
let ExpoUIText: any = null;

try {
  // @expo/ui might not be available in Snack
  ExpoUI = require('@expo/ui');
  // Try to get specific components
  ExpoUIButton = ExpoUI?.Button;
  ExpoUIText = ExpoUI?.Text;
} catch (error) {
  console.log('@expo/ui not available, using fallback');
}

export type ThemeToggleSize = 'small' | 'default' | 'large';

interface ThemeToggleProps {
  size?: ThemeToggleSize;
  style?: any;
  onToggle?: () => void;
  theme?: 'light' | 'dark';
  useExpoUI?: boolean; // Flag to try Expo UI
}

export const ThemeToggleExpoUI: React.FC<ThemeToggleProps> = ({
  size = 'default',
  style,
  onToggle,
  theme,
  useExpoUI = false,
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

  // Try to use Expo UI if available and requested
  if (useExpoUI && ExpoUI) {
    try {
      // Attempt to use Expo UI Button if available
      // Note: @expo/ui is alpha and may not work in Snack
      if (ExpoUIButton) {
        return (
          <View style={style}>
            <Text style={{ color: '#10b981', fontSize: 12, marginBottom: 8 }}>
              ✓ Using @expo/ui Button
            </Text>
            <ExpoUIButton
              onPress={onToggle}
              style={[
                styles.themeToggle,
                {
                  padding: config.padding,
                  borderRadius: config.borderRadius,
                },
              ]}
            >
              <MaterialIcons
                name={isDark ? 'light-mode' : 'dark-mode'}
                size={config.size}
                color="white"
              />
            </ExpoUIButton>
          </View>
        );
      } else {
        // Expo UI available but Button component not found
        return (
          <View style={style}>
            <Text style={{ color: '#f59e0b', fontSize: 12, marginBottom: 8 }}>
              ⚠ @expo/ui loaded but Button not found
            </Text>
            <TouchableOpacity
              style={[
                styles.themeToggle,
                {
                  padding: config.padding,
                  borderRadius: config.borderRadius,
                },
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
          </View>
        );
      }
    } catch (error) {
      console.log('Expo UI failed, using fallback:', error);
    }
  }

  // Standard implementation (fallback)
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
