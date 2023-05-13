import './style/index.css'
import NavBar from "./components/NavBar";
import { Routes, Route, Outlet } from "react-router-dom";
import MiscCont from './components/criteria/MiscCont';
import Criteria from './components/criteria/Criteria';
import { useState } from 'react';
import Utils from './utils/utils';
import data from "./data.json";

function App() {
  const [selectedCategory, setSelectedCategory] = useState('CHAMPIONS');
  const [displayImg, setDisplayImg] = useState(Utils.imgObject['CHAMPIONS']);

  const handleNavClick = (e) => {
    let text = e.target.textContent
    setSelectedCategory(text)
    setDisplayImg(Utils.imgObject[text]);
  }


  return (
    <div className="App">
      <NavBar handleNavClick={handleNavClick} />
      <Routes>
        <Route
          path="/"
          element={
            <Criteria
              img={displayImg}
              selectedCategory={selectedCategory}
              filterBoxesCategory={Utils.championsCategories}
            />
          }
        />
        <Route
          path="/champions"
          element={
            <Criteria
              img={displayImg}
              selectedCategory={selectedCategory}
              filterBoxesCategory={Utils.championsCategories}
            />
          }
        />
        <Route
          path="/items"
          element={
            <Criteria
              selectedCategory={selectedCategory}
              img={displayImg}
              filterBoxesCategory={Utils.itemsCategory}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
