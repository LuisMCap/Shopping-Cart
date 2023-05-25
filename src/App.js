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
  const [firstTime, setFirstTime] = useState(true)

  const handleNavClick = (e) => {
    let text = e.target.textContent;
    setSelectedCategory(text);
    setDisplayImg(Utils.imgObject[text]);
  };

  const increaseQuant = (e, selectedChampName) => {
    setDisplayData(
      displayData.map((champ) => {
        if (champ.id === selectedChampName) {
          let newQuant = champ.quantity + 1;
          return { ...champ, quantity: newQuant };
        }
        return champ;
      })
    );
    setChampData(
      champData.map((champ) => {
        if (champ.id === selectedChampName) {
          let newQuant = champ.quantity + 1;
          return { ...champ, quantity: newQuant };
        }
        return champ;
      })
    );
  };

  const decreaseQuant = (e, selectedChampName) => {
    setDisplayData(
      displayData.map((champ) => {
        if (champ.id === selectedChampName) {
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
    setChampData(
      champData.map((champ) => {
        if (champ.id === selectedChampName) {
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

  const howManyChecks = () => {
    let count = 0;
    filterData.forEach((filter) => {
        filter.options.forEach((option) => {
          if (option.active) {
            count += 1;
          }
      });
    });
    return count;
  };

  useEffect(() => {
    let displayChamps = []
    if (firstTime) {
      let cleanData = [];
      for (let champ in dataChamp.data) {
        cleanData.push(dataChamp.data[champ]);
      }
      setChampData(cleanData);
      setDisplayData(cleanData);
      setIsDataReady(true);
      setFirstTime(false);
      return
    }
    champData.forEach((champ) => {
      let count = 0;
      filterData.forEach((filter) => {
        if (filter.name === "Role") {
          filter.options.forEach((option) => {
            champ.tags.forEach((tag) => {
              if (
                tag === option.category &&
                option.active &&
                howManyChecks() >= 2
              ) {
                count += 1;
              }
              if (
                tag === option.category &&
                option.active &&
                howManyChecks() === 1
              ) {
                displayChamps.push(champ);
              }
            });
          });
        }
        if (filter.name === "Price") {
          filter.options.forEach((option) => {
            console.log(champ.price, option.category);
            if (
              champ.price === option.category &&
              option.active &&
              howManyChecks() >= 2
            ) {
              count += 1;
            }
            if (
              champ.price === option.category &&
              option.active &&
              howManyChecks() === 1
            ) {
              displayChamps.push(champ);
            }
          });
        }
        if (filter.name === "Range") {
          filter.options.forEach((option) => {
            if (
              option.category === "Ranged" &&
              champ.stats.attackrange >= 400 &&
              option.active &&
              howManyChecks() >= 2
            ) {
              count += 1;
            }
            if (
              option.category === "Ranged" &&
              champ.stats.attackrange >= 400 &&
              option.active &&
              howManyChecks() === 1
            ) {
              displayChamps.push(champ);
            }
            if (
              option.category === "Melee" &&
              champ.stats.attackrange < 400 &&
              option.active &&
              howManyChecks() >= 2
            ) {
              count += 1;
            }
            if (
              option.category === "Melee" &&
              champ.stats.attackrange < 400 &&
              option.active &&
              howManyChecks() === 1
            ) {
              displayChamps.push(champ);
            }
          });
        }
      });
      if (count === howManyChecks()) {
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
              champData={champData}
              displayData={displayData}
              isDataReady={isDataReady}
              increaseQuant={increaseQuant}
              decreaseQuant={decreaseQuant}
              updateFilterChamp={updateFilterChamp}
              filterData={filterData}
              totalQuant={champData.length}
              displayedQuant={displayData.length}
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
              champData={champData}
              displayData={displayData}
              isDataReady={isDataReady}
              increaseQuant={increaseQuant}
              decreaseQuant={decreaseQuant}
              updateFilterChamp={updateFilterChamp}
              filterData={filterData}
              totalQuant={champData.length}
              displayedQuant={displayData.length}
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
              setDisplayData={setDisplayData}
            />
          }
        />
        <Route
          path="/shopping-cart"
        />
      </Routes>
    </div>
  );
}

export default App;
