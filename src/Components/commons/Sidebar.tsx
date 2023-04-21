import { useState } from 'react';
import type { RestaurantType } from '../../Type/interface';
import { SidebarStyle } from './styled';

type SidebarListProps = {
  list: RestaurantType[];
};

function SidebarList(props: SidebarListProps): JSX.Element {
  const [data, setData] = useState(props.list);

  const handleClick = (value: RestaurantType) => {
    const newData = data.filter((item: RestaurantType) => item.id !== value.id);
    setData(newData);
    localStorage.setItem('cardData', JSON.stringify(newData));
  };

  return (
    <div className="sideBar">
      <div>최근 본 음식점</div>
      <hr></hr>
      {data.map((item: RestaurantType) => (
        <div key={item.id}>
          <span>
            <strong>{item.bsnsnm}</strong>
            <button onClick={() => handleClick(item)}>X</button>
            <br />
          </span>
          <span id="content">{item.addrroad}</span>
        </div>
      ))}
    </div>
  );
}
// 5개 이상 넘어가면 제일 최근에 넣은거 지우기 기능 ㄱ

function Sidebar(): JSX.Element {
  const cardData = JSON.parse(localStorage.getItem('cardData') || 'null');
  return (
    <SidebarStyle>
      {cardData ? (
        <SidebarList list={cardData} />
      ) : (
        <div className="sideBar">
          <div>최근 본 음식점</div>
          <hr></hr>
        </div>
      )}
    </SidebarStyle>
  );
}

export default Sidebar;
