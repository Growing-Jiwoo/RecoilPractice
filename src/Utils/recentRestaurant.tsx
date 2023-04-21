import { useNavigate } from 'react-router-dom';
import type { RestaurantType } from '../Type/interface';

export function recentRestaurant() {
  const navigate = useNavigate();

  function handleClick(value: RestaurantType): void {
    const previousData = localStorage.getItem('cardData');
    const viewCntData = localStorage.getItem('viewCnt');

    const previousDataArray: RestaurantType[] = previousData
      ? JSON.parse(previousData)
      : [];
    const viewCntDataArray: { id: string; viewCnt: number }[] = viewCntData
      ? JSON.parse(viewCntData)
      : [];

    const previousDataIndex: number = previousDataArray.findIndex(
      (item: RestaurantType) => item.id === value.id
    );

    if (previousDataIndex === -1) {
      if (previousDataArray.length === 3) {
        previousDataArray.shift();
      }
      previousDataArray.push(value);
      localStorage.setItem('cardData', JSON.stringify(previousDataArray));
    }
    const viewCntDataIndex: number = viewCntDataArray.findIndex(
      (item: { id: string; viewCnt: number }) => item.id === String(value.id)
    );

    if (viewCntDataIndex === -1) {
      viewCntDataArray.push({ id: String(value.id), viewCnt: 1 });
    } else {
      viewCntDataArray[viewCntDataIndex].viewCnt++;
    }

    localStorage.setItem('viewCnt', JSON.stringify(viewCntDataArray));
    navigate(`/list/${value.id}`);
  }

  return handleClick;
}
