import { useState } from 'react';
import Modal from 'react-modal';
import { PopupContainer, PopupContent } from './styled';
import useGeoLocation from '../../Hooks/useGeolocation';
import useNearRestaurantRank from '../../Hooks/useNearRestaurantRank';
import { PopUpRankTable } from './PopUpRankTable';

Modal.setAppElement('#root');

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 999,
  },
  content: {
    border: 'none',
    borderRadius: '10px',
    maxWidth: '29vw',
    maxHeight: '80vh',
    overflow: 'auto',
    padding: 0,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
};

function Popup({ isOpen, closeModal }: any) {
  const location = useGeoLocation();
  const gugun = location.coordinates?.address;
  const nearRestaurantRank = useNearRestaurantRank(gugun);
  const [disabled, setDisabled] = useState(
    !!localStorage.getItem('popupDisabled')
  );

  const handleButtonClick = () => {
    setDisabled(true);
    localStorage.setItem('popupDisabled', 'true');
  };

  return (
    <Modal
      isOpen={isOpen && !disabled}
      contentLabel="Popup Modal"
      style={customStyles}
    >
      <PopupContainer>
        <button id="closebtn" onClick={closeModal}>
          X
        </button>
        <PopupContent>
          <h2>{gugun} TOP3</h2>
          <p>사용자 근처 음식점 조회수 TOP3에 대한 리스트입니다.</p>
          <PopUpRankTable data={nearRestaurantRank} />
          <button onClick={handleButtonClick}>오늘 하루 보지 않기</button>
        </PopupContent>
      </PopupContainer>
    </Modal>
  );
}

export default Popup;
