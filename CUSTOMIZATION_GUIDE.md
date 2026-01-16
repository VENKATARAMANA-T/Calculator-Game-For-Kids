# 🎨 Design & Customization Guide

## Color Scheme

### Current Color Palette:

```css
/* Primary Colors */
--purple: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
--pink: linear-gradient(135deg, #f093fb 0%, #f5576c 100%)
--gold: #FFD700 / #FFA500
--green: #00FF00 / #00CC00
--red-pink: #FF1493 / #FF69B4
--blue: #1e3c72 / #2a5298

/* Accent Colors */
--text-dark: #333
--text-light: #666
--text-white: #fff
--border-gold: #FF8C00
```

---

## Customization Instructions

### 1. Change Primary Colors

**Edit: `src/App.css`**

```css
/* Line ~20: Home container background */
.home-container {
  background: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%);
}
```

**Edit: `src/styles/Calculator.css`**

```css
/* Display screen color */
.display-screen {
  background: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%);
  border: 3px solid #YOUR_ACCENT_COLOR;
}
```

### 2. Change Button Colors

**Edit: `src/styles/Calculator.css`**

```css
.calc-button {
  background: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%);
  border: 3px solid #YOUR_BORDER_COLOR;
}

.operation-btn {
  background: linear-gradient(135deg, #YOUR_GOLD 0%, #YOUR_ORANGE 100%);
}

.equals-btn {
  background: linear-gradient(135deg, #YOUR_GREEN_1 0%, #YOUR_GREEN_2 100%);
}
```

### 3. Change Game Mode Colors

**Edit: `src/styles/GameMode.css`**

```css
.game-screen {
  background: #YOUR_BACKGROUND_COLOR;
}

.stat {
  background: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%);
}

.question-display {
  background: linear-gradient(135deg, #YOUR_DARK_1 0%, #YOUR_DARK_2 100%);
}
```

---

## Font Customization

### Change Font Family

**Edit: `src/index.css` (Line 1)**

```css
:root {
  font-family: 'Your Font Name', 'Fallback Font', sans-serif;
}
```

**Recommended Kid-Friendly Fonts:**
- Comic Sans MS (current)
- Trebuchet MS
- Verdana
- Century Gothic
- Segoe Print

### Import Google Fonts

```css
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;700&display=swap');

:root {
  font-family: 'Fredoka', 'Comic Sans MS', sans-serif;
}
```

---

## Animation Customization

### Button Hover Effects

**Edit: `src/styles/Calculator.css`**

```css
.calc-button:hover {
  transform: translateY(-5px);  /* Change -5px to more/less */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}
```

### Add Rotation Effect

```css
.calc-button:hover {
  transform: translateY(-5px) rotate(2deg);
}
```

### Slower Animation

```css
.calc-button {
  transition: all 0.5s ease;  /* Change 0.2s to 0.5s */
}
```

### Icon Float Speed

```css
.icon {
  animation: float 5s ease-in-out infinite;  /* Change 3s to 5s */
}
```

---

## Size & Spacing Customization

### Button Size

**Edit: `src/styles/Calculator.css`**

```css
.calc-button {
  padding: 20px;        /* Change for bigger/smaller buttons */
  font-size: 1.5rem;    /* Change text size */
  border-radius: 15px;  /* Change for rounder buttons */
}
```

### Display Size

```css
.display-value {
  font-size: 2.5rem;    /* Make display text bigger/smaller */
}
```

### Gap Between Elements

```css
.button-row {
  gap: 10px;            /* Reduce/increase space between buttons */
}
```

---

## Game Mode Customization

### Difficulty Settings

**Edit: `src/components/GameMode.jsx` (Line ~30)**

```javascript
// Customize number ranges
case 'easy':
  num1 = Math.floor(Math.random() * 10) + 1;    // Change 10 to 20 for numbers 1-20
  num2 = Math.floor(Math.random() * 10) + 1;
  break;
```

### Time Limit

**Edit: `src/components/GameMode.jsx` (Line ~22)**

```javascript
const [timeLeft, setTimeLeft] = useState(30);    // Change 30 to your desired seconds
```

### Points Per Difficulty

**Edit: `src/components/GameMode.jsx` (Line ~130)**

```javascript
const points = difficulty === 'easy' ? 10 : difficulty === 'medium' ? 20 : 50;
// Change 10, 20, 50 to your preferred point values
```

---

## Responsive Design Customization

### Mobile Breakpoint

**Edit: `src/styles/Calculator.css`**

```css
@media (max-width: 768px) {
  /* Adjust 768px to your preferred breakpoint */
}
```

### Mobile Button Size

```css
@media (max-width: 500px) {
  .calc-button {
    padding: 12px;    /* Smaller on mobile */
    font-size: 1rem;
  }
}
```

---

## Border & Shadow Customization

### Button Shadows

```css
.calc-button {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  /* 0 5px 15px - vertical, blur, spread
     rgba(0, 0, 0, 0.2) - color and opacity */
}
```

### Border Radius

```css
.calc-button {
  border-radius: 15px;  /* Less = sharper, More = rounder */
}
```

---

## Text Customization

### Font Sizes

```css
.title {
  font-size: 4rem;      /* Change for bigger/smaller title */
}

.subtitle {
  font-size: 1.5rem;
}

.mode-card h2 {
  font-size: 2rem;
}
```

### Text Colors

```css
.title {
  color: white;         /* Change to any color */
  text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
}
```

---

## Special Effects

### Gradient Text

```css
.title {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Glow Effect

```css
.display-value {
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
}
```

### Neon Effect

```css
.calc-button {
  box-shadow: 0 0 10px rgba(102, 126, 234, 0.5);
  border-color: #667eea;
}
```

---

## Theme Presets

### Warm Theme Colors

```css
--primary: linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)
--secondary: linear-gradient(135deg, #FFD700 0%, #FF8C00 100%)
--dark: #1a1a2e
--accent: #FF4500
```

### Cool Theme Colors

```css
--primary: linear-gradient(135deg, #00B4DB 0%, #0083B0 100%)
--secondary: linear-gradient(135deg, #00FF00 0%, #00CC00 100%)
--dark: #0a1929
--accent: #00D9FF
```

### Pastel Theme Colors

```css
--primary: linear-gradient(135deg, #FFB6C1 0%, #FFC0CB 100%)
--secondary: linear-gradient(135deg, #FFE4B5 0%, #FFDAB9 100%)
--dark: #696969
--accent: #FFB6C1
```

---

## Accessibility Customization

### Increase Contrast

```css
.calc-button {
  color: white;
  background: #000;
  border: 2px solid white;
}
```

### Larger Text for Vision Issues

```css
:root {
  font-size: 18px;  /* Default is 16px */
}
```

### Add Focus Outline

```css
.calc-button:focus {
  outline: 3px solid #FFD700;
  outline-offset: 2px;
}
```

---

## Scrollbar Styling

**Edit: `src/index.css`**

```css
::-webkit-scrollbar {
  width: 15px;  /* Make scrollbar wider */
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
}
```

---

## Tips for Best Customization

1. **Always backup** your CSS before making changes
2. **Test on mobile** after every change
3. **Use browser DevTools** (F12) to preview changes in real-time
4. **Keep color contrast high** for readability
5. **Test with multiple browsers** for compatibility
6. **Consider accessibility** when changing colors

---

## Color Combination Ideas for Kids

### Rainbow Theme
- Buttons: Red, Orange, Yellow, Green, Blue
- Background: Purple
- Text: White

### Candy Theme
- Colors: Pink, Light Blue, Light Green, Yellow, Purple
- Background: White with pastel gradient
- Text: Dark Purple

### Ocean Theme
- Colors: Various shades of blue and teal
- Background: Navy blue gradient
- Text: Cyan and white

### Fire Theme
- Colors: Red, Orange, Yellow
- Background: Dark red gradient
- Text: White and gold

---

## Need Help?

- All CSS files have detailed comments
- Each component has inline documentation
- Check browser DevTools (F12) for live editing
- Test changes in Developer Tools first
- Keep original files as backup

---

**Happy Customizing!** 🎨
