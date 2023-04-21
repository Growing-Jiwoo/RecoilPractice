import { useEffect, useState } from 'react';
import theme from '../../Style/theme';
import useNearRestaurangList from '../../Hooks/useNearRestaurangList';
import useGeoLocation from '../../Hooks/useGeolocation';
import Paging from '../../Hooks/usePaging';
import type { RestaurantType } from '../../Type/interface';
import { CardStyle } from './styled';

interface CardListProps {
  currentPosts: RestaurantType[];
  userLocationName: string | undefined;
}

function MainCardList({ currentPosts, userLocationName }: CardListProps) {
  return (
    <div>
      <CardStyle>
        <div className="container">
          <div id="title"> {userLocationName} 주변 음식점 목록</div>
          {currentPosts.map((value: RestaurantType, index: number) =>
            userLocationName == `부산 ${value.gugun.split(' ')[1]}` ? (
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

function RestaurantCardList(): JSX.Element {
  const getNearRestaurangList = useNearRestaurangList(null);
  const location = useGeoLocation();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postPerPage, setPostPerPage] = useState<number>(5);
  const [currentPosts, setCurrentPosts] = useState<RestaurantType[]>([]);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (getNearRestaurangList) {
      const indexOfLastPost = currentPage * postPerPage;
      const indexOfFirstPost = indexOfLastPost - postPerPage;
      setCurrentPosts(
        getNearRestaurangList.slice(indexOfFirstPost, indexOfLastPost)
      );
    }

    if (location.loaded === true) {
      let cnt = 0;
      getNearRestaurangList.map((value: RestaurantType) =>
        location.coordinates?.address == `부산 ${value.gugun.split(' ')[1]}`
          ? cnt++
          : null
      );
      setCount(cnt);
    }
  }, [currentPage, postPerPage, getNearRestaurangList, location]);
  const setPage = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div>
      {getNearRestaurangList.length !== 0 ? (
        <div>
          <MainCardList
            currentPosts={currentPosts}
            userLocationName={location.coordinates?.address}
          />
          <Paging page={currentPage} count={count} setPage={setPage} />
        </div>
      ) : (
        <div>
          <CardStyle theme={theme}>
            <div className="container">
              <div id="title">주변 음식점 목록을 불러오는 중입니다..</div>
              <div className="card">
                <div className="card_title">title</div>
                <div className="card_contents">contents</div>
                <div className="card_footer">footer</div>
              </div>
            </div>
          </CardStyle>
        </div>
      )}
    </div>
  );
}

export default RestaurantCardList;
