export enum DisplayItemTypes {
  Text,
  Image,
  Date,
  Boolean,
  Select,

}

type ItemStructure = { title: string; type: DisplayItemTypes; key: keyof BackendDataRecord };

export type ItemStrucutreList = ItemStructure[];

export type BackendDataRecord = {
  imageUrl: string;
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
  containsMilk: boolean;
};