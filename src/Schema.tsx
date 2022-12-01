import { ItemType } from "./ItemType";
type TableRecord = {
  imageUrl: string;
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
};
type ItemStructure = { title: string; type: ItemType; key: keyof TableRecord };
type ItemStrucutreList = ItemStructure[];
export const Schema: ItemStrucutreList = [
  {
    title: "Image",
    type: ItemType.Image,
    key: "imageUrl",
  },
  {
    title: "Item Name",
    type: ItemType.Text,
    key: "name",
  },
  {
    title: "Fat(g)",
    type: ItemType.Text,
    key: "fat",
  },
  {
    title: "Carbs(g)",
    type: ItemType.Text,
    key: "carbs",
  },
  {
    title: "Protein(g)",
    type: ItemType.Select,
    key: "protein",
  },
  {
    title: "Calories(g)",
    type: ItemType.Text,
    key: "calories",
  },
];

function createData(
  imageUrl: string,
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
): TableRecord {
  return { imageUrl, name, calories, fat, carbs, protein };
}

export const rows = [
  createData("https://start-page.buffer.com/cdn-cgi/image/width=200,height=200/https://buffer-start-page-uploads.s3.amazonaws.com/63626e169a1b8a414924cdcc/1668423340895.icon%20gelb.png", "Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("https://start-page.buffer.com/cdn-cgi/image/width=200,height=200/https://buffer-start-page-uploads.s3.amazonaws.com/63626e169a1b8a414924cdcc/1668423340895.icon%20gelb.png", "Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("https://start-page.buffer.com/cdn-cgi/image/width=200,height=200/https://buffer-start-page-uploads.s3.amazonaws.com/63626e169a1b8a414924cdcc/1668423340895.icon%20gelb.png", "Eclair", 262, 16.0, 24, 6.0),
  createData("https://start-page.buffer.com/cdn-cgi/image/width=200,height=200/https://buffer-start-page-uploads.s3.amazonaws.com/63626e169a1b8a414924cdcc/1668423340895.icon%20gelb.png", "Cupcake", 305, 3.7, 67, 4.3),
  createData("https://start-page.buffer.com/cdn-cgi/image/width=200,height=200/https://buffer-start-page-uploads.s3.amazonaws.com/63626e169a1b8a414924cdcc/1668423340895.icon%20gelb.png", "Gingerbread", 356, 16.0, 49, 3.9),
];
