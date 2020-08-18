import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import NavBar from "./components/navbar/NavBar";
import SearchBar from "./components/searchbar/SearchBar"
import "./App.css";

function App() {
  return (
    <MuiThemeProvider>
      <NavBar />
      <SearchBar />
    </MuiThemeProvider>
  );
}

export default App;
