import { DisplayItemTypes, ItemStrucutreList } from "./DataTypes";
export const foodDataFullSchema: ItemStrucutreList = [
  {
    title: "Image",
    type: DisplayItemTypes.Image,
    key: "imageUrl",
  },
  {
    title: "Item Name",
    type: DisplayItemTypes.Text,
    key: "name",
  },
  {
    title: "Fat(g)",
    type: DisplayItemTypes.Text,
    key: "fat",
  },
  {
    title: "Carbs(g)",
    type: DisplayItemTypes.Text,
    key: "carbs",
  },
  {
    title: "Protein(g)",
    type: DisplayItemTypes.Select,
    key: "protein",
  },
  {
    title: "Calories(g)",
    type: DisplayItemTypes.Text,
    key: "calories",
  },
  {
    title: "Contains Milk",
    type: DisplayItemTypes.Boolean,
    key: "containsMilk",
  },
];

export const ImageLinkSchema: ItemStrucutreList = [
  {
    title: "Image",
    type: DisplayItemTypes.link,
    key: "imageUrl",
  },
  {
    title: "Item Name",
    type: DisplayItemTypes.Text,
    key: "name",
  },
  
];
