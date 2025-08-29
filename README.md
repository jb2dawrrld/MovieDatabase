# Movie Database
### _A movie database web application built using React that fetches real-time movie data_

## Overview
This project is a responsive movie search web app. Users can search for movies, view results, and see detailed information about each movie in a popup. The app uses [OMDb API](https://www.omdbapi.com/) for fetching movie data.

## Features

- Search for movies by title
- View search results with posters and titles
- Click a result to see detailed info (year, rating, brief move description, poster) in a popup
- Responsive and modern UI

## Technologies Used

- React (functional components, hooks)
- Axios (for HTTP requests)
- [OMDb API](https://www.omdbapi.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- CSS for styling

## Project Structure

- `src/App.js` — Main app logic and state management
- `src/components/Search.js` — Search input and button
- `src/components/Results.js` — Displays search results
- `src/components/Result.js` — Individual movie result card
- `src/components/Popup.js` — Movie details popup
- `src/index.js` — Entry point
- `src/index.css` — Styles
