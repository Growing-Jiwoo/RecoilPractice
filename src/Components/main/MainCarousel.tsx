import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { BannerLogoStyle } from './styled';
import useNearRestaurangList from '../../Hooks/useNearRestaurangList';

function ControlledCarousel(): JSX.Element {
  const [index, setIndex] = useState<number>(0);
  const [restaurantCount, setRestaurantCount] = useState<number>(0);
  const nearRestaurants = useNearRestaurangList(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (nearRestaurants.length !== 0) {
      setRestaurantCount(nearRestaurants.length);
    }
  }, [nearRestaurants]);

  function handleSelect(selectedIndex: number): void {
    setIndex(selectedIndex);
  }

  function handleBannerClick(): void {
    if (restaurantCount !== 0) {
      const randomRestaurantIndex: number =
        Math.floor(Math.random() * restaurantCount) + 1;
      navigate(`/list/${randomRestaurantIndex}`);
    }
  }

  return (
    <div>
      <BannerLogoStyle>
        <Carousel id="Carousel" activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="random_banner"
              alt="bannerLogo"
              src={`${process.env.PUBLIC_URL}/img/randomBanner.PNG`}
              onClick={handleBannerClick}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="rank_banner"
              alt="bannerLogo"
              src={`${process.env.PUBLIC_URL}/img/rankBanner.PNG`}
            />
          </Carousel.Item>
        </Carousel>
      </BannerLogoStyle>
    </div>
  );
}

export default ControlledCarousel;
