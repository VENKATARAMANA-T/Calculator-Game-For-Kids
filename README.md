# 🎮 Math Calculator Game for Kids

A fun and interactive React-based calculator application with game mechanics designed specifically for kids to learn math while having fun!

## 🎯 Features

### 1. **Calculator Mode** 🧮
- Full-featured calculator with basic operations
- Colorful and kid-friendly UI
- Large, easy-to-tap buttons
- Display history of calculations
- Operations supported:
  - Addition (+)
  - Subtraction (-)
  - Multiplication (×)
  - Division (÷)
  - Modulo (%)
  - Decimal support

### 2. **Game Mode** 🎯
- **Multiple Difficulty Levels:**
  - Easy (numbers 1-10)
  - Medium (numbers 1-20)
  - Hard (numbers 1-50)

- **Game Mechanics:**
  - Timed challenges (30 seconds per round)
  - Score system with difficulty-based points
  - Streak counter for consecutive correct answers
  - Real-time feedback (✓ Correct! or ❌ Wrong!)
  - Progressive learning

- **Scoring:**
  - Easy: 10 points per correct answer
  - Medium: 20 points per correct answer
  - Hard: 50 points per correct answer

## 🎨 Kid-Friendly Design

- **Vibrant Colors:** Gradient backgrounds and colorful buttons
- **Large, Readable Text:** Easy to read for young users
- **Animations:** Smooth transitions and visual feedback
- **Emojis:** Fun icons to make the app engaging
- **Responsive Design:** Works on desktop, tablet, and mobile devices
- **Comic Sans Font:** Playful and easy-to-read typography

## 💻 Technologies Used

- **React 18** - UI Framework
- **Vite** - Build tool and development server
- **CSS3** - Styling with gradients and animations
- **JavaScript ES6+** - Core functionality

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- npm (comes with Node.js)

### Installation

1. **Navigate to the project directory:**
```bash
cd c:\Users\tvenk\OneDrive\Desktop\Lab_Manual\Q5
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm run dev
```

4. **Open your browser and go to:**
```
http://localhost:5173/
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Calculator.jsx          # Calculator component with all operations
│   └── GameMode.jsx            # Game mode with difficulty levels
├── styles/
│   ├── Calculator.css          # Calculator-specific styles
│   └── GameMode.css            # Game mode styles
├── App.jsx                      # Main app component with home screen
├── App.css                      # Home screen and global styles
├── index.css                    # Global CSS and scrollbar styling
└── main.jsx                     # React entry point
```

## 🎮 How to Use

### Calculator Mode
1. Click "Calculator" on the home screen
2. Use the number buttons to enter values
3. Click operation buttons (+, -, ×, ÷, %)
4. Click "=" to calculate
5. View calculation history on the right panel
6. Use "C" to clear or "⌫" for backspace

### Game Mode
1. Click "Game Mode" on the home screen
2. Choose a difficulty level:
   - ⭐ Easy - For beginners
   - ⭐⭐ Medium - For intermediate learners
   - ⭐⭐⭐ Hard - For advanced learners
3. Click "Start Game"
4. Solve the math problems as quickly as you can
5. Enter your answer and press Enter or click "✓ Answer"
6. Complete as many problems as you can in 30 seconds
7. View your final score and streak when time runs out

## 🎨 Customization

You can easily customize the app by modifying:
- **Colors:** Edit the gradient colors in CSS files
- **Difficulty ranges:** Modify the number ranges in `GameMode.jsx`
- **Time limit:** Change the `timeLeft` state in `GameMode.jsx`
- **Points:** Adjust the scoring in the `handleSubmitAnswer` function
- **Animations:** Modify animation timing in CSS files

## 📱 Responsive Features

- **Desktop:** Full layout with side-by-side panels
- **Tablet:** Optimized touch controls
- **Mobile:** Single-column layout with large buttons
- **All devices:** Proper scrolling and viewport handling

## 🔧 Available Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🎓 Educational Benefits

- **Mental Math:** Kids practice quick mental calculations
- **Confidence Building:** Instant feedback and gamification
- **Progressive Learning:** Difficulty levels adapt to skill levels
- **Fun Learning:** Game mechanics make math enjoyable
- **Stress-Free:** No pressure, just learning through play

## 🐛 Browser Support

- Chrome/Chromium (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 📝 Notes

- All calculations are performed client-side (no server required)
- History is stored in-session only (clears on page refresh)
- No data is collected or stored
- Completely safe for kids to use

## 🌟 Future Enhancements

Potential features to add:
- Leaderboard / High scores
- Different game modes (multiplication practice, division drills)
- Sound effects and background music
- Customizable difficulty settings
- Achievement badges
- Multiplayer mode
- Dark mode toggle
- Theme customization

## 📄 License

This project is free to use and modify for educational purposes.

---

**Have fun learning math!** 🎉 🧮 🎯

For any questions or suggestions, feel free to contribute or submit feedback!
