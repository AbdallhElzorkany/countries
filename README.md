# 🌍 REST Countries API with Theme Switcher

![Design preview for the REST Countries API with color theme switcher coding challenge](./desktop-preview.jpg)

A modern web application that allows users to explore countries around the world, built with Next.js, TypeScript, and Tailwind CSS. The app features a clean, responsive design with a dark/light theme switcher.

## 🚀 Features

- 🌐 View all countries from the REST Countries API
- 🔍 Search for countries by name
- 🌎 Filter countries by region (Africa, Americas, Asia, Europe, Oceania)
- 📱 Responsive design that works on all devices
- 🌓 Toggle between light and dark mode
- ℹ️ View detailed information about each country
- 🗺️ Navigate to bordering countries

## 🛠️ Technologies Used

- [Next.js](https://nextjs.org/) - React framework for server-rendered applications
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [REST Countries API](https://restcountries.com) - Free API for country data
- [Lucide Icons](https://lucide.dev/) - Beautiful & consistent icon toolkit

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AbdallhElzorkany/countries.git
   cd countries
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🏗️ Project Structure

```
src/
├── app/                  # App router
│   ├── [name]/           # Dynamic route for country details
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # Reusable components
│   ├── Countries.tsx     # Countries list and filters
│   ├── CountryCard.tsx   # Individual country card
│   ├── Header.tsx        # Navigation header
│   └── ThemeProvider.tsx # Theme context provider
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Frontend Mentor](https://www.frontendmentor.io/) for the design challenge
- [REST Countries API](https://restcountries.com) for the country data

## 📬 Contact

If you have any questions or feedback, feel free to open an issue or reach out to the project maintainers.
