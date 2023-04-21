import { useEffect, useState } from 'react';
import type { RankDataType } from '../../Type/interface';
import useAxiosWithAuth from '../../Hooks/useAxiosWithAuth';
import RestaurantChart from './RestaurantChart';
import { RankTable } from './RestaurantRankTable';
import LodingUi from '../commons/LodingUi';

function useRankData() {
  const axiosInstance = useAxiosWithAuth();
  const [rankData, setRankData] = useState<RankDataType[]>([]);

  useEffect(() => {
    async function getRankData() {
      try {
        const url = `http://127.0.0.1:8000/rankData`;
        const response = await axiosInstance.get<RankDataType[]>(url);
        setRankData(response.data);
      } catch (error: unknown) {
        console.log(error);
        throw error;
      }
    }
    getRankData();
  }, []);

  return rankData;
}

function ChartLayout() {
  const rankData = useRankData();
  console.log(rankData);
  if (rankData.length !== 0) {
    return (
      <>
        <RestaurantChart props={rankData} />
        <RankTable data={rankData} />
      </>
    );
  } else {
    console.log('데이터 없음');
    return (
      <div>
        <LodingUi />
      </div>
    );
  }
}

export default ChartLayout;
