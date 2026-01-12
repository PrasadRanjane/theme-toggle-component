# Expo UI Testing Note

## Current Implementation

This snack uses standard React Native components (`TouchableOpacity`, `MaterialIcons`) which work reliably in Expo Snack.

## Testing @expo/ui

To test `@expo/ui` compatibility:

1. Add to `package.json`:
```json
"@expo/ui": "latest"
```

2. Try importing:
```tsx
import { Button } from '@expo/ui';
```

3. Note: `@expo/ui` is currently in alpha and may not work in Expo Snack/Expo Go. It requires development builds.

## Recommendation

For Expo Snacks, stick with standard React Native components or popular UI libraries like:
- React Native Elements
- React Native Paper
- NativeBase

These work reliably in Snack!
