import styled from 'styled-components';

export const TableStyle = styled.div`
  .table {
    margin: 20px 0;
  }
  table {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
    font-size: 12px;
  }
  table td,
  table th {
    border: 1px solid #ddd;
    padding: 8px;
  }
  table tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  table tr:hover {
    background-color: #ddd;
  }
  table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #04aa6d;
    color: white;
  }
  table tr {
    cursor: pointer;
  }
  table thead {
    font-size: 15px;
  }
`;

export const ImgStyle = styled.div`
  #restaurantContainer {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-content: flex-start;
    margin: 2% 0;
  }
  #restaurantImg {
    width: 13%;
    height: 13%;
  }
`;

export const RestaurantInfoStyle = styled.div`
  .listContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .listItem {
    width: 40%;
    text-align: center;
  }

  #listHeader {
    background-color: lightgray;
    font-size: 22px;
    font-weight: bold;
  }
`;

export const RestaurantMapStyle = styled.div`
  #map {
    width: 100%;
    height: 50vh;
    margin: 3% 0px 0px 0px;
  }
`;
