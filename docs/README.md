🚀 Getting Started

1. Clone the Repository
   git clone https://github.com/Hussainkagi/tangerine.git
   cd tangerine
2. Install Dependencies
   npm install
3. Run the Development Server
   npm start
   This will launch the app at http://localhost:3000.

4. Build for Production
   npm run build
   Creates an optimized production build in the build/ folder.

5. Run Tests
   npm test
   Launches the test runner in interactive watch mode.

📦 Libraries & Dependencies
The project uses the following dependencies:

📌 Core
React (^19.1.0) – Core library

React DOM (^19.1.0) – React's DOM rendering

🧭 Routing
React Router DOM (^7.5.0) – For page navigation and routing

🎨 Styling
Bootstrap (^5.3.5) – For responsive layout and styling

Bootstrap Icons (^1.11.3) – Icon library for UI elements

📊 Charts
Chart.js (^4.4.8) – Chart rendering engine

React Chart.js 2 (^5.3.0) – React wrapper for Chart.js

🧪 Testing
@testing-library/react – React component testing

@testing-library/jest-dom – Custom Jest matchers

@testing-library/user-event – Simulate user interaction

@testing-library/dom – Low-level DOM testing utilities

🔧 Other
@popperjs/core (^2.11.8) – Tooltip and popover positioning

Web Vitals (^2.1.4) – Performance measurement

🧰 Compatible Node Version
Required Node Version: v20.0.0

Make sure you are using Node.js version 20.0.0 to ensure compatibility.

🧱 Component-Based Architecture
The app is designed using a modular and reusable component-based architecture.

Navbar: Handles top navigation and branding

Sidebar: Vertical navigation with menu items

Card: UI display cards for quick stats

StatCard: Specialized stat summary components

BarChart, LineChart, PieChart: Visual representations using Chart.js

Each component has its own folder with logic (.js) and style (.module.css) for separation of concerns.

🧪 Testing
Testing is powered by React Testing Library and Jest:

Component rendering

User interaction

DOM validation

Run tests using:

bash
Copy
Edit
npm test
📌 Notes
This project follows modern React best practices.

Uses modular CSS (\*.module.css) for scoped styling.

Designed with scalability and readability in mind.
