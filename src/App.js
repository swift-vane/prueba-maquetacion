import React from "react";
import './styles/styles.scss';
import Header from './components/header.js';
import Slider from './components/slider.js';
import Footer from './components/footer.js';
import TITLE from "./modules/title.js";



function App() {
  return (
    <div className="App">
        <Header />
        <TITLE />
        <Slider />
        <Footer />

    </div>
  );
}

export default App;
