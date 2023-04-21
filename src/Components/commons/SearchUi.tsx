import { useState } from 'react';
import useGeoLocation from '../../Hooks/useGeolocation';
import {
  DirectionInput,
  DirectionInputContainer,
  DirectionInputImage,
} from './styled';

interface Coordinates {
  lat: number;
  lng: number;
  address: string;
  place: string;
}

interface Location {
  loaded: boolean;
  coordinates?: Coordinates;
  error?: {
    code: number;
    message: string;
  };
}

function insertDestination(destination: string, data: Location) {
  if (data.loaded === true) {
    console.log(`출발지: ${data.coordinates?.place} / 도착지: ${destination} `);
    window.open(
      `https://map.kakao.com/?sName=${data.coordinates?.place}&eName=${destination}`,
      '_blank'
    );
  } else {
    alert('잠시만 기다려주세요.');
  }
}

function SearchComponent(): JSX.Element {
  const location = useGeoLocation();
  const [destination, setDestination] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDestination(event.target.value);
  };

  const handleDirectionInputClick = () => {
    insertDestination(destination, location);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      insertDestination(destination, location);
    }
  };

  return (
    <DirectionInputContainer>
      <DirectionInputImage onClick={handleDirectionInputClick} />
      <DirectionInput
        value={destination}
        onChange={handleInputChange}
        placeholder="목적지를 입력하여 길을 찾으세요."
        onKeyDown={handleKeyDown}
      />
    </DirectionInputContainer>
  );
}

export default SearchComponent;
