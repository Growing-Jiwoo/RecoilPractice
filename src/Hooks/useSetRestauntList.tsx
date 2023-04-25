import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { restaurantListAtom } from '../recoil/Restaurant/atoms';
import useNearRestaurangList from './useNearRestaurangList';

function useFetchRestaurantList() {
  const setRestaurantList = useSetRecoilState(restaurantListAtom);

  const restaurantList = useNearRestaurangList(null);

  useEffect(() => {
    setRestaurantList(restaurantList);
  }, [setRestaurantList, restaurantList]);

  return null;
}

export default useFetchRestaurantList;
