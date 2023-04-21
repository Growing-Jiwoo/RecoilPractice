import { ThemeProvider } from 'styled-components';
import { Routes, Route, Outlet } from 'react-router-dom';
import MainLayout from './Components/main/MainLayout';
import LoginUi from './Components/login/LoginUi';
import Map from './Components/map/Map';
import RestaurantList from './Components/list/listLayout';
import NavBar from './Components/commons/Navbar';
import Footer from './Components/commons/Footer';
import theme from './Style/theme';
import DetailInfoLayout from './Components/detailInfomation/DetailInfoLayout';
import ChartLayout from './Components/chart/ChartLayout';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
      >
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<LoginUi />} />
            <Route element={<CommonLayout />}>
              <Route path="/home" element={<MainLayout />} />
              <Route path="/map" element={<Map />} />
              <Route path="/list" element={<RestaurantList />} />
              <Route path="/list/:id" element={<DetailInfoLayout />} />
              <Route path="/chart" element={<ChartLayout />} />
            </Route>
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
}

const CommonLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
