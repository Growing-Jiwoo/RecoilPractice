import styled from 'styled-components';

export const LodingUiStyle = styled.div`
  #loading_container {
  }
  #lodingBody {
    width: 100vw;
    height: 100vh;
    position: absolute;

    background-color: lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
  }
  #spinner {
  }
`;

export const SidebarStyle = styled.div`
  .sideBar {
    position: fixed;
    right: 10%;
    top: 50%;
    transform: translate(50%, -50%);
    text-align: center;
    width: 150px;
    background-color: #f2f2f2;
    word-wrap: break-word;
    z-index: 2;
  }

  #content {
    font-size: 12px;
  }

  button {
    font-size: 11px;
    width: 20px;
    height: 20px;
    margin-left: 5px;
  }

  @media only screen and (max-width: 1645px) {
    .sideBar {
      display: none;
    }
  }
`;

export const DirectionInput = styled.input`
  width: 270px;
  height: 40px;
  border: 0px;
  border-bottom: 1px solid #222228;
  font-size: 14px;
  color: #222222;
  background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important;
`;

export const DirectionInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const DirectionInputImage = styled.div`
  width: 40px;
  height: 40px;
  border-bottom: 1px solid #222228;
  background: url('https://s3-ap-northeast-1.amazonaws.com/dcicons/new/images/web/common/search@2x.png');
  background-size: 40px;
  background-repeat: no-repeat;
  background-position: left;
  cursor: pointer;
`;

export const FooterStyle = styled.footer`
  footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 60px;
    line-height: 60px;
    color: #8a8c8f;
    border-top: 1px solid #dee5e7;
    background-color: #f2f2f2;
    text-align: center;
  }
`;

export const LogoutButton = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.7);
  font-size: 16px;
  letter-spacing: 0.5px;
  right: 2%;
  &:hover {
    color: #000;
  }
`;
