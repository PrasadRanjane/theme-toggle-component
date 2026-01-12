# Theme Toggle Component - Expo Snack

A reusable theme toggle button for switching between light and dark modes. Extracted from the pokedex project.

## Features

- ✅ **Dark/Light Mode Toggle** - Switch themes with a single tap
- ✅ **Multiple Sizes** - Small, default, and large variants
- ✅ **Icon Transitions** - Smooth icon switching (light-mode/dark-mode)
- ✅ **Theme Integration** - Works with ThemeProvider
- ✅ **Customizable** - Custom styles and callbacks
- ✅ **Expo Snack Compatible** - Uses standard React Native components (works perfectly in Snack)
- ✅ **Minimal Dependencies** - Only @expo/vector-icons

## Note on @expo/ui

`@expo/ui` is currently in alpha and **does not work in Expo Snack**. This component uses standard React Native components (`TouchableOpacity` + `MaterialIcons`) which work reliably in Snack.

## Installation in Expo Snack

1. Copy `components/ThemeToggle.tsx` to your Snack
2. Copy `contexts/ThemeContext.tsx` and `constants/Colors.ts` if you need theme support
3. Copy `App.tsx` for examples
4. Add dependency: `@expo/vector-icons`
5. Run!

## Usage

### Basic Usage

```tsx
import { ThemeToggle } from './components/ThemeToggle';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <YourComponent />
    </ThemeProvider>
  );
}

function YourComponent() {
  const { toggleTheme } = useTheme();
  
  return <ThemeToggle onToggle={toggleTheme} />;
}
```

### Size Variants

```tsx
<ThemeToggle size="small" onToggle={toggleTheme} />
<ThemeToggle size="default" onToggle={toggleTheme} />
<ThemeToggle size="large" onToggle={toggleTheme} />
```

### Custom Styling

```tsx
<ThemeToggle
  onToggle={toggleTheme}
  style={{ marginTop: 20, backgroundColor: 'rgba(0,0,0,0.1)' }}
/>
```

### Without Theme Context

```tsx
<ThemeToggle
  theme="dark" // or "light"
  onToggle={() => console.log('Toggled!')}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'small' \| 'default' \| 'large'` | `'default'` | Size variant |
| `style` | `StyleProp<ViewStyle>` | `undefined` | Custom styles |
| `onToggle` | `() => void` | `undefined` | Callback when toggled |
| `theme` | `'light' \| 'dark'` | `system` | Current theme (optional) |

## Example Snack

See `App.tsx` for complete examples showcasing all features and variants.

## Source

This component was extracted from the [pokedex project](https://github.com/PrasadRanjane/pokedex), specifically from `app/index.tsx`.

## License

Free to use in your projects!
