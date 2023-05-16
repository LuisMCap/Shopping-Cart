import "./style/index.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import DisplayItems from "./components/displayItems/displayItems";
import { useState, useEffect } from "react";
import Utils from "./utils/utils";
import dataChamp from "./dataChampions.json";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("CHAMPIONS");
  const [displayImg, setDisplayImg] = useState(Utils.imgObject["CHAMPIONS"]);
  const [champData, setChampData] = useState([]);
  const [isDataReady, setIsDataReady] = useState(false);
  const [displayData, setDisplayData] = useState([])
  const [filterData, setFilterData] = useState(Utils.championsCategories)
  const [currentFilter, setCurrentFilter] = useState({})

  const handleNavClick = (e) => {
    let text = e.target.textContent;
    setSelectedCategory(text);
    setDisplayImg(Utils.imgObject[text]);
  };

  useEffect(() => {
    let cleanData = [];
    for (let champ in dataChamp.data) {
      cleanData.push(dataChamp.data[champ]);
    }
    setChampData(cleanData);
    setDisplayData(cleanData);
    setIsDataReady(true);
  }, []);

  const increaseQuant = (e, selectedChampName) => {
    setChampData(
      champData.map((champ) => {
        if (champ.id == selectedChampName) {
          let newQuant = champ.quantity + 1;
          return { ...champ, quantity: newQuant };
        }
        return champ;
      })
    );
  };

  const decreaseQuant = (e, selectedChampName) => {
    setChampData(
      champData.map((champ) => {
        if (champ.id == selectedChampName) {
          let newQuant = champ.quantity - 1;
          if (newQuant <= 0) {
            alert("You cannot put a negative amount");
            return { ...champ };
          } else {
            return { ...champ, quantity: newQuant };
          }
        }
        return champ;
      })
    );
  };

const updateFilterChamp = (e, selectedCategory) => {
  setFilterData(
    filterData.map((data) => {
      const updatedOptions = data.options.map((role) => {
        if (role.category === selectedCategory) {
          return { ...role, active: !role.active };
        }
        return role;
      });

      return { ...data, options: updatedOptions };
    })
  );
};

  const howManyChecks = (name) => {
    let count = 0;
    filterData.forEach((filter) => {
      if (filter.name == name) {
        filter.options.forEach((option) => {
          if (option.active) {
            count += 1;
          }
        });
      }
    });
    return count;
  };

  useEffect(() => {
    let displayChamps = [];
    champData.forEach((champ) => {
      let count = 0;
      filterData.forEach((filter) => {
        if (filter.name == "Role") {
          filter.options.forEach((option) => {
            champ.tags.forEach(tag=>{
              if (tag==option.category && option.active &&howManyChecks("Role") >= 2) {
                count += 1;
              }
              if (tag == option.category && option.active && howManyChecks('Role') == 1) {
                displayChamps.push(champ);
              }
            })
          });
        }
      });
      if (count == howManyChecks("Role")) {
        displayChamps.push(champ);
      }
    });

    setDisplayData(displayChamps);
  }, [filterData]);

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
              filterBoxesCategory={filterData}
              champData={displayData}
              isDataReady={isDataReady}
              increaseQuant={increaseQuant}
              decreaseQuant={decreaseQuant}
              updateFilterChamp={updateFilterChamp}
            />
          }
        />
        <Route
          path="/champions"
          element={
            <DisplayItems
              img={displayImg}
              selectedCategory={selectedCategory}
              filterBoxesCategory={filterData}
              champData={displayData}
              isDataReady={isDataReady}
              increaseQuant={increaseQuant}
              decreaseQuant={decreaseQuant}
              updateFilterChamp={updateFilterChamp}
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
