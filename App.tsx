/**
 * Expo Snack: Theme Toggle Component
 * 
 * A reusable theme toggle button for switching between light and dark modes.
 * Testing @expo/ui compatibility.
 * 
 * Features:
 * - Dark/Light mode toggle
 * - Multiple size variants
 * - Smooth icon transitions
 * - Theme context integration
 * - Works with ThemeProvider
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';

function AppContent() {
  const { colors, isDark, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      
      {/* Header with Gradient */}
      <LinearGradient
        colors={[colors.primary, colors.primaryLight]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Theme Toggle</Text>
          <Text style={styles.headerSubtitle}>
            Switch between light and dark modes
          </Text>
        </View>
      </LinearGradient>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Default Size */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Default Size
          </Text>
          <View style={[styles.exampleCard, { backgroundColor: colors.surface }]}>
            <ThemeToggle onToggle={toggleTheme} />
            <Text style={[styles.description, { color: colors.textSecondary }]}>
              Tap to toggle theme
            </Text>
          </View>
        </View>

        {/* Small Size */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Small Size
          </Text>
          <View style={[styles.exampleCard, { backgroundColor: colors.surface }]}>
            <ThemeToggle size="small" onToggle={toggleTheme} />
            <Text style={[styles.description, { color: colors.textSecondary }]}>
              Compact toggle button
            </Text>
          </View>
        </View>

        {/* Large Size */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Large Size
          </Text>
          <View style={[styles.exampleCard, { backgroundColor: colors.surface }]}>
            <ThemeToggle size="large" onToggle={toggleTheme} />
            <Text style={[styles.description, { color: colors.textSecondary }]}>
              Larger toggle button
            </Text>
          </View>
        </View>

        {/* In Header Example */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            In Header (Like Pokedex)
          </Text>
          <View style={[styles.headerExample, { backgroundColor: colors.surface }]}>
            <LinearGradient
              colors={[colors.primary, colors.primaryLight]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.headerExampleGradient}
            >
              <ThemeToggle
                onToggle={toggleTheme}
                style={styles.headerToggle}
              />
              <View style={styles.headerExampleContent}>
                <Text style={styles.headerExampleTitle}>App Header</Text>
                <Text style={styles.headerExampleSubtitle}>
                  Theme toggle in header
                </Text>
              </View>
            </LinearGradient>
          </View>
        </View>

        {/* Multiple Toggles */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Multiple Sizes Together
          </Text>
          <View style={[styles.exampleCard, { backgroundColor: colors.surface }]}>
            <View style={styles.multipleContainer}>
              <ThemeToggle size="small" onToggle={toggleTheme} />
              <ThemeToggle size="default" onToggle={toggleTheme} />
              <ThemeToggle size="large" onToggle={toggleTheme} />
            </View>
          </View>
        </View>

        {/* Usage Examples */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Usage Examples
          </Text>
          <View style={[styles.codeBlock, { backgroundColor: colors.surface }]}>
            <Text style={[styles.codeText, { color: colors.text }]}>
              {'<ThemeToggle onToggle={toggleTheme} />\n\n'}
              {'<ThemeToggle size="small" />\n\n'}
              {'<ThemeToggle size="large" />\n\n'}
              {'<ThemeToggle\n'}
              {'  onToggle={() => console.log("Toggled!")}\n'}
              {'  style={{ marginTop: 20 }}\n'}
              {'/>'}
            </Text>
          </View>
        </View>

        {/* Current Theme Display */}
        <View style={styles.section}>
          <View style={[styles.themeDisplay, { backgroundColor: colors.surface }]}>
            <Text style={[styles.themeDisplayText, { color: colors.text }]}>
              Current Theme: {isDark ? '🌙 Dark' : '☀️ Light'}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 24,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  headerContent: {
    alignItems: 'center',
    gap: 8,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 1,
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: '500',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingTop: 32,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
  exampleCard: {
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    gap: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
  },
  headerExample: {
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  headerExampleGradient: {
    padding: 20,
    paddingTop: 60,
    position: 'relative',
  },
  headerToggle: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  headerExampleContent: {
    alignItems: 'center',
    gap: 8,
  },
  headerExampleTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  headerExampleSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  multipleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  codeBlock: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  codeText: {
    fontFamily: 'monospace',
    fontSize: 14,
    lineHeight: 20,
  },
  themeDisplay: {
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
  },
  themeDisplayText: {
    fontSize: 18,
    fontWeight: '600',
  },
  warningText: {
    fontSize: 12,
    fontStyle: 'italic',
    marginTop: 8,
    textAlign: 'center',
  },
});
