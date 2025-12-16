# Devify - Spotify Themed Portfolio
[arijit.ghosh.dastidar.net](https://arijit.ghosh.dastidar.net)


A personal portfolio website with a sleek, immersive design inspired by Spotify. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Spotify-inspired UI**: Dark mode, familiar layout, and interactive elements.
- **Responsive Design**: Works seamlessly on desktop and mobile.
- **Modular Data**: Easily update your portfolio data (Work, Education, Skills) via configuration files.
- **Tech Stack**: React 18, Vite, TypeScript, Tailwind CSS.

## 🛠️ Getting Started

### Prerequisites

- Node.js installed (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd dastidarag01.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

##  Deploying New Changes

This project is configured to deploy to **GitHub Pages**.

1. **Make your changes** and commit them:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```

2. **Deploy**:
   ```bash
   npm run deploy
   ```
   *Note: This command automatically builds your project (creating a `dist/` folder) and pushes it to the `gh-pages` branch.*

3. Your changes will be live at `https://arijit.ghosh.dastidar.net` in a few minutes.

## 🎨 Customization

You can personalize the portfolio by editing the files in the `config/` folder:

- **`config/data.ts`**: Update your Work Experience, Education, Projects, and Skills.
- **`config/strings.ts`**: Update your Name, Bio, Social Links, and Section Titles.
- **`config/assets.ts`**: Update image URLs (Profile picture, Company logos).

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
