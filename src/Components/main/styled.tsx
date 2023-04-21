import styled from 'styled-components';

export const CardStyle = styled.div`
  * {
    color: white;
    font-weight: bold;
    text-align: center;
    overflow-wrap: break-word;
  }

  .container {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-content: flex-start;

    position: relative;
    margin: 30px auto;
    padding: 5px 10px 20px 10px;
    max-width: 1154px;
    background-color: rgb(0, 0, 0);
  }

  .container #title {
    padding-top: 10px;
    width: 100%;
    font-size: 23px;
    text-align: center;
    top: 0px;
    left: 0px;
  }

  .card {
    width: 27%;
    height: 250px;
    border: 1px solid red;
    margin: 20px 0px 20px 0px;
    cursor: pointer;
  }

  .card_title {
    width: 100%;
    background-color: pink;
    flex: 1;
  }

  .card_contents {
    width: 100%;
    background-color: red;
    flex: 7;
  }

  .card_footer {
    width: 100%;
    background-color: orange;
    flex: 1;
  }
`;

export const BannerLogoStyle = styled.div`
  img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60vw;
    height: 400px;
    margin: 0 auto;
  }

  .random_banner {
    cursor: pointer;
  }

  #Carousel {
    margin: 20px 0 0 0;
  }
`;

export const MainDisplay = styled.div`
  animation: ${({ theme }) => theme.animation.fast_fadein_fadeout};
`;

export const MainBanner = styled.div`
  ${({ theme }) => theme.common.flexCenterColumn};
  animation: ${({ theme }) => theme.animation.slow_fadein_fadeout};
  margin-top: 23vh;
  min-height: 70vh;
`;

export const MainBannerImage = styled.img`
  max-width: 100%;
  height: auto;
`;

export const PopupContainer = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  #closebtn {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 2;
  }
`;

export const PopupContent = styled.div`
  background-color: #fff;
  padding: 0px 20px 20px 20px;
  position: relative;

  h2,
  p {
    text-align: center;
  }

  p {
    font-size: 12px;
  }

  button {
    width: 120px;
    height: 25px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -30px;
    font-size: 12px;
  }
`;
