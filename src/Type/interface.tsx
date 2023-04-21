export interface RestaurantType {
  addrjibun: string;
  addrroad: string;
  bsnscond: string;
  bsnsnm: string;
  gugun: string;
  id: number;
  lat: string | number;
  lon: string | number;
  menu: string;
  tel: string;
  viewcnt: number;
}

export interface RankDataType {
  id: number;
  bsnsnm: string;
  viewcnt: number;
  addrroad: string;
}

export interface SelectBoxOption {
  value: string;
  label: string;
}
