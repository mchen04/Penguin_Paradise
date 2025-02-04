# 🐧 Penguin Paradise

A charming interactive web application featuring adorable penguins in a winter wonderland! Meet different penguins with unique accessories, props, and fun phrases while enjoying a snowy atmosphere with background music.

## ✨ Features

- 🎵 Background music player with play/pause controls
- ❄️ Animated snow effect for an immersive winter experience
- 🎩 Penguins with random accessories (scarf, hat, sunglasses, flower, bowtie, crown, earmuffs, ribbon, glasses)
- 🎈 Various props for penguins (balloon, sign, candy, umbrella, fishing rod, snowboard, heart)
- 💬 Cute penguin phrases and interactions
- 🔄 "Meet More Penguins" feature to generate new penguin combinations
- 🎵 Interactive sound effects on penguin interactions
- 📱 Responsive design for all device sizes

## 🛠️ Tech Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** TailwindCSS with animations
- **UI Components:** Shadcn UI (based on Radix UI)
- **Routing:** React Router DOM
- **State Management:** React Query
- **Form Handling:** React Hook Form with Zod validation
- **Development Tools:**
  - ESLint for code quality
  - TypeScript for type safety
  - PostCSS for CSS processing
  - SWC for fast compilation

## 🚀 Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd penguin-paradise
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open your browser and visit `http://localhost:5173`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality checks

## 🎮 Usage

- Click on penguins to interact with them and hear cute sound effects
- Use the "Meet More Penguins" button to generate new penguin combinations
- Toggle background music using the audio player controls
- Enjoy the falling snow animation!

## 🎨 Customization

The application features several customizable elements:

- Penguin accessories (in `ACCESSORIES` array)
- Penguin props (in `PROPS` array)
- Penguin phrases (in `PHRASES` array)
- Snow animation properties
- Background gradient colors
- Audio tracks and sound effects

## 🌟 Features in Detail

### Penguin Component
- Renders adorable penguins with customizable accessories and props
- Supports click interactions with sound effects
- Displays random cute phrases in speech bubbles

### Snow Animation
- Creates a dynamic winter atmosphere
- Customizable snow particle properties
- Smooth performance with React optimization

### Audio System
- Background music player with controls
- Interactive sound effects on penguin interactions
- Responsive audio management

## 💻 Development

The project uses a modern development stack with:

- TypeScript for enhanced development experience
- ESLint for code quality
- Tailwind CSS for styling
- Vite for fast development and building
- React Router for navigation
- React Query for data management

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.
