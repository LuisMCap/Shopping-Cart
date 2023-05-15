import './style/index.css'
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import DisplayItems from './components/displayItems/displayItems';
import { useState, useEffect } from 'react';
import Utils from './utils/utils';
import dataChamp from './dataChampions.json'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('CHAMPIONS');
  const [displayImg, setDisplayImg] = useState(Utils.imgObject['CHAMPIONS']);
  const [champData, setChampData] = useState([])
  const [isDataReady, setIsDataReady] = useState(false)

  const handleNavClick = (e) => {
    let text = e.target.textContent
    setSelectedCategory(text)
    setDisplayImg(Utils.imgObject[text]);
    console.log(champData)
  }

  useEffect(() => {
    let cleanData = [];
    for (let champ in dataChamp.data) {
      cleanData.push(dataChamp.data[champ]);
    }
    setChampData(cleanData)
    setIsDataReady(true)
  }, []);

  const increaseQuant = (e, selectedChampName) => {
    setChampData(
      champData.map((champ) => {
        if (champ.id == selectedChampName) {
          let newQuant = champ.quantity + 1
          return { ...champ, quantity: newQuant };
        }
        return champ
      })
    );
  }

  const decreaseQuant = (e,selectedChampName) => {
    setChampData(
      champData.map(champ=>{
        if (champ.id == selectedChampName) {
          let newQuant = champ.quantity - 1
          if (newQuant <= 0) {
            alert("You cannot put a negative amount");
            return {...champ}      
          }
          else {
            return {...champ, quantity: newQuant};
          }
        }
        return champ;
      })
    )
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
              champData={champData}
              isDataReady={isDataReady}
              increaseQuant={increaseQuant}
              decreaseQuant={decreaseQuant}
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
              champData={champData}
              isDataReady={isDataReady}
              increaseQuant={increaseQuant}
              decreaseQuant={decreaseQuant}
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

// for (let key in dataChamp.data) {
//   if (typeof(dataChamp.data[key]) == 'object') {
//     dataChamp.data[key]['quantity'] = 1
//   }
//   else {
//     // console.log(typeof(dataChamp.data[key]))
//   };
// }


export default App;

