import { atom } from 'recoil';
import type { RestaurantType } from '../../Type/interface';

export const restaurantListAtom = atom<RestaurantType[]>({
  key: 'restaurantListAtom',
  default: [],
});

export const userLocationAtom = atom<string | undefined>({
  key: 'userLocationAtom',
  default: undefined,
});
