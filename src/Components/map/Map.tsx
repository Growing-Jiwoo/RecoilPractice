import { useEffect, useState } from 'react';
import useNearRestaurangList from '../../Hooks/useNearRestaurangList';
import type { RestaurantType } from '../../Type/interface';

function Map() {
  const getNearRestaurangList = useNearRestaurangList(null);
  const [myLocation, setMyLocation] = useState<
    { latitude: number; longitude: number } | string
  >('');
  const { naver } = window;
  const markers: naver.maps.Marker[] = [];
  const infowindows: naver.maps.InfoWindow[] = [];
  let currentMarker: naver.maps.Marker;
  const clickMarkerInfowindow: naver.maps.InfoWindow[] = [];

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setMyLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
      console.log(`현재 위치 GET 완료1`);
      const map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(35.1795543, 129.0756416),
        zoom: 17,
      });
    } else {
      window.alert('현재 위치를 알수 없습니다.');
    }
  }, []);

  useEffect(() => {
    if (typeof myLocation !== 'string' && getNearRestaurangList) {
      const currentPosition = [myLocation.latitude, myLocation.longitude];

      const map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        zoom: 17,
        zoomControl: true,
        minZoom: 14,
        zoomControlOptions: {
          position: naver.maps.Position.RIGHT_BOTTOM,
        },
      });

      getNearRestaurangList.map((value: RestaurantType, index: number) => {
        const contentTags = `'<div class="naver-container"><p class="ptag">${value.bsnsnm} 여깁니다</p><span class="spantag">맞아요</span></div>'`;
        currentMarker = new naver.maps.Marker({
          position: new naver.maps.LatLng(Number(value.lat), Number(value.lon)),
          map,
        });

        const infowindow = new naver.maps.InfoWindow({
          content: contentTags,
          borderWidth: 1,
          anchorSize: new naver.maps.Size(10, 10),
          pixelOffset: new naver.maps.Point(10, -10),
        });

        markers.push(currentMarker);
        infowindows.push(infowindow);
      });

      naver.maps.Event.addListener(map, 'idle', () => {
        updateMarkers(map, markers);
      });

      const updateMarkers = (
        isMap: naver.maps.Map,
        isMarkers: naver.maps.Marker[]
      ) => {
        const mapBounds: any = isMap.getBounds();
        let marker;
        let position;
        for (let i = 0; i < isMarkers.length; i += 1) {
          marker = isMarkers[i];
          position = marker.getPosition();

          if (mapBounds.hasLatLng(position)) {
            showMarker(isMap, marker);
          } else {
            hideMarker(marker);
          }
        }
      };

      const showMarker = (isMap: naver.maps.Map, marker: naver.maps.Marker) => {
        marker.setMap(isMap);
      };

      const hideMarker = (marker: naver.maps.Marker) => {
        marker.setMap(null);
      };

      const getClickHandler = (seq: number) => {
        return () => {
          const marker = markers[seq];
          const infoWindow = infowindows[seq];
          naver.maps.Event.addListener(map, 'idle', () => {
            if (infoWindow.getMap()) {
              infoWindow.close();
            }
          });
          if (infoWindow.getMap()) {
            infoWindow.close();
          } else {
            infoWindow.open(map, marker);
            clickMarkerInfowindow.push(infoWindow);
          }
        };
      };

      for (let i = 0; i < markers.length; i += 1) {
        naver.maps.Event.addListener(markers[i], 'click', getClickHandler(i));
      }
    }
  }, [getNearRestaurangList]);

  return <div id="map" style={{ width: '100%', height: '873px' }} />;
}

export default Map;
