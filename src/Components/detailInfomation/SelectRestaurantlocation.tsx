import { RestaurantMapStyle } from './styled';
import { useEffect } from 'react';

interface RestaurantMapProps {
  location: {
    lat: string | number;
    lon: string | number;
  };
}

const { naver } = window;
export function SelectRestaurantlocation(
  props: RestaurantMapProps
): JSX.Element {
  const { lat, lon } = props.location;
  useEffect(() => {
    const map = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(Number(lat), Number(lon)),
      zoom: 17,
      zoomControl: true,
      minZoom: 14,
      zoomControlOptions: {
        position: naver.maps.Position.RIGHT_BOTTOM,
      },
    });

    const markerOptions = {
      position: new naver.maps.LatLng(Number(lat), Number(lon)),
      map: map,
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const marker = new naver.maps.Marker(markerOptions);

    console.log('loading navermap');
  }, []);

  return (
    <div>
      <RestaurantMapStyle>
        <div id="map"></div>
      </RestaurantMapStyle>
    </div>
  );
}
