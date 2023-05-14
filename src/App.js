import './style/index.css'
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import DisplayItems from './components/displayItems/displayItems';
import { useState } from 'react';
import Utils from './utils/utils';

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
            <DisplayItems
              img={displayImg}
              selectedCategory={selectedCategory}
              filterBoxesCategory={Utils.championsCategories}
            />
          }
        />
        <Route
          path="/champions"
          element={
            <DisplayItems
              img={displayImg}
              selectedCategory={selectedCategory}
              filterBoxesCategory={Utils.championsCategories}
            />
          }
        />
        <Route
          path="/items"
          element={
            <DisplayItems
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
