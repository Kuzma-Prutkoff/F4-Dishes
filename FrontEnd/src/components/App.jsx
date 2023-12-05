import React from "react";
import "../styles/App.css";

import Header from "./Header.jsx";
import Home from "./Home.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Home />
      <Footer />
    </React.Fragment>
  );
}

export default App;