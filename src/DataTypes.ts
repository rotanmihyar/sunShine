export enum DisplayItemTypes {
  Text,
  Image,
  Date,
  Boolean,
  Select,
  link,

}

type ItemStructure<T> = { title: string; type: DisplayItemTypes; key: keyof T };

export type ItemStrucutreList<T> = ItemStructure<T>[];

export type BackendDataRecord = {
  imageUrl: string;
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
  containsMilk: boolean;
  link: string;
};