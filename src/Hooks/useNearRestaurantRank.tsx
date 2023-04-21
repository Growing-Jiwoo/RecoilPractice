import { useEffect, useState } from 'react';
import useAxiosWithAuth from './useAxiosWithAuth';
import type { RestaurantType } from '../Type/interface';

export type RestaurantListType = RestaurantType[];

function useNearRestaurantRank(
  gugun: string | null | undefined
): RestaurantListType {
  const [data, setData] = useState<RestaurantListType>([]);

  const axiosInstance = useAxiosWithAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://127.0.0.1:8000/top3?gugun=${gugun}`;
        const response = await axiosInstance.get<RestaurantType[]>(url);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [gugun]);

  return data;
}

export default useNearRestaurantRank;
