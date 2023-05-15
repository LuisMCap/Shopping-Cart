import itemsImg from '../assets/Shopkeeper_Preseason_2021_Promo_01.webp'
import leagueImg from '../assets/league-of-legends-01.jpg'

const Utils = (() => {
    const APIImgLink =
      "https://ddragon.leagueoflegends.com/cdn/13.8.1/img/champion/";

    const championsCategories = [
      {
        name: "Role",
        category: [
          "Fighter",
          "Tank",
          "Mage",
          "Assassin",
          "Marksman",
          "Support",
        ],
      },
      {
        name: "Range",
        category: ["Melee", "Ranged"],
      },
      {
        name: "Price",
        category: ["450", "1350", "3150", "4800", "6300"],
      },
    ];

    const championsCategorie = [
      {
        name: "Role",
        category: {
          Fighter: false, 
          Tank: false,
          Mage: false,
          Assassin: false,
          Marksman: false,
          Support:false,
        },
      },
      {
        name: "Range",
        category: {Melee: false, Ranged:false},
      },
      {
        name: "Price",
        category: {450:false, 1350:false, 3150:false, 4800:false, 6300:false},
      },
    ];

    const itemsCategory = [
      // {
      //   name: "Role",
      //   category: [
      //     "Fighter",
      //     "Tank",
      //     "Mage",
      //     "Assassin",
      //     "Marksman",
      //     "Support",
      //   ],
      // },
      {
        name: "Range",
        category: ["Melee", "Ranged"],
      },
      {
        name: "Price",
        category: ["450", "1350", "3150", "4800", "6300"],
      },
    ];

    const imgObject = {
        CHAMPIONS: leagueImg,
        ITEMS: itemsImg
    }

    const createImgLink = (championName) => {
      return APIImgLink + championName
    }

    return {imgObject, championsCategories, itemsCategory, createImgLink}
})();

export default Utils
 