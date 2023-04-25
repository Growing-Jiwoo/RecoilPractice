import { useEffect, useMemo, useState } from 'react';
import theme from '../../Style/theme';
import useNearRestaurangList from '../../Hooks/useNearRestaurangList';
import useGeoLocation from '../../Hooks/useGeolocation';
import Paging from '../../Hooks/usePaging';
import type { RestaurantType } from '../../Type/interface';
import { CardStyle } from './styled';
import { filteredRestaurantListSelector } from '../../recoil/Restaurant/selectors';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  restaurantListAtom,
  userLocationAtom,
} from '../../recoil/Restaurant/atoms';
import { MainCardList } from './MainCardList';
import React from 'react';

function RestaurantCardList(): JSX.Element {
  const getNearRestaurangList = useNearRestaurangList(null);
  const location = useGeoLocation();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postPerPage, setPostPerPage] = useState<number>(5);
  const [currentPosts, setCurrentPosts] = useState<RestaurantType[]>([]);
  const [count, setCount] = useState<number>(0);
  const [restaurantList, setRestaurantList] =
    useRecoilState(restaurantListAtom);
  const setUserLocation = useSetRecoilState(userLocationAtom);
  const filteredList = useRecoilValue(filteredRestaurantListSelector);

  const memoizedCurrentPosts = useMemo(() => {
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;

    return filteredList.slice(indexOfFirstPost, indexOfLastPost);
  }, [currentPage, postPerPage, filteredList]);

  useEffect(() => {
    setRestaurantList(getNearRestaurangList);
  }, [getNearRestaurangList, setRestaurantList]);

  useEffect(() => {
    if (location) {
      setUserLocation(location.coordinates?.address);
    }
  }, [location, setUserLocation]);

  useEffect(() => {
    setCurrentPosts(memoizedCurrentPosts);
    setCount(filteredList.length);
  }, [memoizedCurrentPosts, filteredList]);

  const setPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {restaurantList.length !== 0 ? (
        <div>
          <MainCardList currentPosts={currentPosts} />
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

export default React.memo(RestaurantCardList);
