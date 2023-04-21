import { useParams } from 'react-router-dom';
import useNearRestaurangList from '../../Hooks/useNearRestaurangList';
import { useEffect } from 'react';
import LodingUi from '../commons/LodingUi';
import { recentRestaurant } from '../../Utils/recentRestaurant';
import { SelectRestaurantlocation } from './SelectRestaurantlocation';
import { DetailRestaurantInfo } from './DetailRestaurantInfo';

interface Params extends Record<string, string> {
  id: string;
}

function DetailInfoLayout(): JSX.Element {
  const recentRestaurantView = recentRestaurant();
  const params = useParams<Params>();
  const nearRestaurant: any = useNearRestaurangList(params.id);

  useEffect(() => {
    if (nearRestaurant.length !== 0) {
      recentRestaurantView(nearRestaurant);
    }
  }, [nearRestaurant]);

  if (nearRestaurant.length !== 0) {
    const restaurantInfo = Array.isArray(nearRestaurant)
      ? nearRestaurant[0]
      : nearRestaurant;
    const restaurantLocation = {
      lat: restaurantInfo.lat,
      lon: restaurantInfo.lon,
    };

    return (
      <div>
        <DetailRestaurantInfo
          imgNum={params.id}
          restaurantInfo={restaurantInfo}
        />
        <SelectRestaurantlocation location={restaurantLocation} />
      </div>
    );
  } else {
    console.log('데이터 없음');
    return (
      <div>
        <LodingUi></LodingUi>
      </div>
    );
  }
}
export default DetailInfoLayout;
