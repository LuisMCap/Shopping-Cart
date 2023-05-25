import itemsImg from "../assets/Shopkeeper_Preseason_2021_Promo_01.webp";
import leagueImg from "../assets/league-of-legends-01.jpg";

const Utils = (() => {
  const APIImgLink =
    "https://ddragon.leagueoflegends.com/cdn/13.8.1/img/champion/";

  const champRoles = ["Fighter", "Tank", "Mage", "Assassin", "Marksman", "Support"];
    const championsCategories = [
      {
        name: "Role",
        options: [
          { category: "Fighter", active: false },
          { category: "Tank", active: false },
          { category: "Mage", active: false },
          { category: "Assassin", active: false },
          { category: "Marksman", active: false },
          { category: "Support", active: false },
        ],
      },
      {
        name: "Range",
        options: [
          { category: "Melee", active: false },
          { category: "Ranged", active: false },
        ],
      },
      {
        name: "Price",
        options: [
          { category: "450", active: false },
          { category: "1350", active: false },
          { category: "3150", active: false },
          { category: "4800", active: false },
          { category: "6300", active: false },
        ],
      },
    ];

  const itemsCategory = [
    {
      name: "Role",
      options: [
        { category: "Fighter", active: false },
        { category: "Tank", active: false },
        { category: "Mage", active: false },
        { category: "Assassin", active: false },
        { category: "Marksman", active: false },
        { category: "Support", active: false },
      ],
    },
    {
      name: "Range",
      options: [
        { category: "Melee", active: false },
        { category: "Ranged", active: false },
      ],
    },
    {
      name: "Price",
      options: [
        { category: "450", active: false },
        { category: "1350", active: false },
        { category: "3150", active: false },
        { category: "4800", active: false },
        { category: "6300", active: false },
      ],
    },
  ];

  const imgObject = {
    CHAMPIONS: leagueImg,
    ITEMS: itemsImg,
  };

  const createImgLink = (championName) => {
    return APIImgLink + championName;
  };

  return {
    imgObject,
    championsCategories,
    itemsCategory,
    createImgLink,
    champRoles
  };
})();

export default Utils;
