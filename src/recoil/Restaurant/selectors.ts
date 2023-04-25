import { selector } from 'recoil';
import type { RestaurantType } from '../../Type/interface';
import { restaurantListAtom, userLocationAtom } from './atoms';

export const filteredRestaurantListSelector = selector<RestaurantType[]>({
  key: 'filteredRestaurantListSelector',
  get: ({ get }) => {
    const restaurantList = get(restaurantListAtom);
    const userLocation = get(userLocationAtom);
    let filteredList: RestaurantType[] = [];

    if (
      userLocation &&
      restaurantList?.length !== undefined &&
      restaurantList.length !== 0
    ) {
      filteredList = restaurantList.filter(
        (restaurant) =>
          userLocation === `부산 ${restaurant.gugun.split(' ')[1]}`
      );
    }

    return filteredList;
  },
});
