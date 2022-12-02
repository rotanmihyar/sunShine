export enum DataType { 
  Text,
  Image,
  Date,
  Boolean,
  Select,

}
export type TableRecord = {
  imageUrl: string;
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
};