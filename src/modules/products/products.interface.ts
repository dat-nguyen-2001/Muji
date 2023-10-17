export enum CurrencyUnits {
  yen = '円',
  dong = '₫',
}

export type ProductSpecs = {
  key: string;
  value: string;
};

export enum CountriesOfOrigin {
  vietnam = 'VIỆT NAM',
  japan = 'NHẬT BẢN',
  malaysia = 'MALAYSIA',
  thailand = 'THÁI LAN',
  china = 'TRUNG QUỐC',
}

export class IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  productCode: string;
  capacity: {
    amount: number;
    unit: { type: string; enum: CurrencyUnits };
  };
  displayImgs: string[];
  specs: ProductSpecs[];
  note: string;
  origin: { type: string; enum: CountriesOfOrigin };
  material: string;
}
