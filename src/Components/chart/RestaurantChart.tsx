import { ResponsivePie } from '@nivo/pie';
import { ChartDiv, RankMentDiv } from './styled';
import type { RankDataType } from '../../Type/interface';

function RestaurantChart(props: { props: RankDataType[] }) {
  const modifiedA = props.props.map(({ bsnsnm, viewcnt }) => ({
    id: bsnsnm,
    value: viewcnt,
  }));

  const handle = {
    padClick: (data: any) => {
      console.log(data);
    },

    legendClick: (data: any) => {
      console.log(data);
    },
  };
  return (
    <ChartDiv>
      <RankMentDiv>모범 음식점 주간 랭킹 TOP 3</RankMentDiv>
      <ResponsivePie
        data={modifiedA}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={1.8}
        cornerRadius={8}
        colors={['olive', 'brown', 'orange']}
        borderWidth={0}
        enableArcLinkLabels={false}
        arcLinkLabelsSkipAngle={0}
        arcLinkLabelsTextColor="#000000"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabel="id"
        arcLabelsTextColor="#ffffff"
        arcLabelsSkipAngle={10}
        onClick={handle.padClick}
        legends={[]}
      />
    </ChartDiv>
  );
}

export default RestaurantChart;
