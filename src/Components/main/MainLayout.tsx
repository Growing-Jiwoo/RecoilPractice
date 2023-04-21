import { useEffect, useState } from 'react';
import ControlledCarousel from './MainCarousel';
import RestaurantCardList from './RestaurantCardList';
import Sidebar from '../commons/Sidebar';
import { MainDisplay, MainBanner, MainBannerImage } from './styled';
import PopUp from './PopUp';
function MainBannerImg(): JSX.Element {
  return (
    <MainBanner>
      <MainBannerImage
        src={process.env.PUBLIC_URL + '/img/bannerLogo.PNG'}
        alt="bannerLogo"
      />
    </MainBanner>
  );
}

function HomeUi(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      openModal();
    }, 4200);

    return () => {
      clearTimeout(delay);
    };
  }, []);

  return (
    <>
      <MainDisplay>
        <PopUp isOpen={isOpen} closeModal={closeModal} />
        <ControlledCarousel />
        <RestaurantCardList />
        <Sidebar />
      </MainDisplay>
    </>
  );
}

function MainComponent(): JSX.Element {
  const [showBanner, setShowBanner] = useState<boolean>(
    !localStorage.getItem('bannerDisplayed')
  );

  useEffect(() => {
    if (showBanner) {
      localStorage.setItem('bannerDisplayed', 'true');
      const hideBannerTimeout = setTimeout(() => {
        setShowBanner(false);
      }, 2000);
      return () => clearTimeout(hideBannerTimeout);
    }
  }, [showBanner]);

  return showBanner ? <MainBannerImg /> : <HomeUi />;
}

export default MainComponent;
