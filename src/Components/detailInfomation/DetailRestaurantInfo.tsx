import { ListGroup } from 'react-bootstrap';
import { ImgStyle, RestaurantInfoStyle } from './styled';
import type { RestaurantType } from '../../Type/interface';

interface DetailRestaurantProps {
  imgNum: string | undefined;
  restaurantInfo: RestaurantType;
}

export function DetailRestaurantInfo(
  props: DetailRestaurantProps
): JSX.Element {
  const { imgNum, restaurantInfo } = props;
  return (
    <div>
      <ImgStyle>
        <div id="restaurantContainer">
          <img
            id="restaurantImg"
            src={process.env.PUBLIC_URL + `/img/img_${imgNum}.jpg`}
          />
        </div>
      </ImgStyle>

      <RestaurantInfoStyle>
        <div>
          <ListGroup className="listContainer">
            <ListGroup.Item id="listHeader" className="listItem">
              {restaurantInfo.bsnsnm}
            </ListGroup.Item>
            <ListGroup.Item className="listItem">
              Address: {restaurantInfo.addrjibun} {restaurantInfo.addrroad}
            </ListGroup.Item>
            <ListGroup.Item className="listItem">
              Menu: {restaurantInfo.menu}
            </ListGroup.Item>
            <ListGroup.Item className="listItem">
              Tel: {restaurantInfo.tel}
            </ListGroup.Item>
          </ListGroup>
        </div>
      </RestaurantInfoStyle>
    </div>
  );
}
