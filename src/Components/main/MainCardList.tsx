import { useRecoilValue } from 'recoil';
import { RestaurantType } from '../../Type/interface';
import { userLocationAtom } from '../../recoil/Restaurant/atoms';
import { CardStyle } from './styled';

interface CardListProps {
  currentPosts: RestaurantType[];
}

export function MainCardList({ currentPosts }: CardListProps) {
  const userLocation = useRecoilValue(userLocationAtom);

  return (
    <div>
      <CardStyle>
        <div className="container">
          <div id="title"> {userLocation} 주변 음식점 목록</div>
          {currentPosts.map((value: RestaurantType, index: number) =>
            userLocation == `부산 ${value.gugun.split(' ')[1]}` ? (
              <div className="card" key={index}>
                <div className="card_title">{value.bsnsnm}</div>
                <div className="card_contents">
                  <img
                    className="food_img"
                    alt="food_img"
                    style={{ width: '200px' }}
                    src={process.env.PUBLIC_URL + `/img/img_${value.id}.jpg`}
                  />
                </div>
                <div className="card_footer">Tel : {value.tel}</div>
              </div>
            ) : null
          )}
        </div>
      </CardStyle>
    </div>
  );
}
