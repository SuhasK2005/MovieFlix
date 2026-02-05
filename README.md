# 🎬 MovieFlix

A Netflix-inspired movie search application built with React, Vite, and the OMDB API. Search and discover movies with a sleek, modern interface.

![MovieFlix](https://img.shields.io/badge/React-18-blue) ![Vite](https://img.shields.io/badge/Vite-Latest-646CFF) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38B2AC)

## ✨ Features

- 🔍 Real-time movie search using OMDB API
- 🎨 Netflix-style UI design
- 📱 Fully responsive layout
- ⚡ Fast and optimized with Vite
- 🎯 Clean and intuitive user interface
- 🔗 Direct IMDb links for each movie

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OMDB API Key (get one free at [omdbapi.com](http://www.omdbapi.com/apikey.aspx))

### Installation

1. Clone the repository

```bash
git clone https://github.com/SuhasK2005/MovieFlix.git
cd MovieFlix
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file in the root directory and add your OMDB API key

```env
VITE_OMDB_API_KEY=your_api_key_here
```

4. Start the development server

```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Built With

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **OMDB API** - Movie data

## 📦 Project Structure

```
MovieFlix/
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx
│   │   ├── MovieCard.jsx
│   │   └── MovieList.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── .env
├── .gitignore
└── package.json
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Features Breakdown

### Search Functionality

- Search for any movie by title
- Real-time API integration
- Error handling for invalid searches

### Movie Cards

- Beautiful Netflix-style cards
- Hover effects with movie details
- Year, type, and IMDb information
- Direct links to IMDb pages

### User Experience

- Loading states
- Error messages
- Empty state guidance
- Responsive design for all devices

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Suhas K**

- GitHub: [@SuhasK2005](https://github.com/SuhasK2005)

## 🙏 Acknowledgments

- Movie data provided by [OMDB API](http://www.omdbapi.com/)
- UI inspiration from Netflix
- Built with React and Vite

---

Made with ❤️ by Suhas K
