import itemsImg from '../assets/Shopkeeper_Preseason_2021_Promo_01.webp'
import leagueImg from '../assets/league-of-legends-01.jpg'

const Utils = (() => {
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

    return {imgObject, championsCategories, itemsCategory}
})();

export default Utils


let role = {
          fighter: "Fighter",
          tank: "Tank",
          mage: "Mage",
          assasin: "Assassin",
          marksman: "Marksman",
          support: "Support",
}
      