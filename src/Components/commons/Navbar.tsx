import { useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import SearchUi from '../commons/SearchUi';
import { useCookies } from 'react-cookie';
import { LogoutButton } from './styled';
import { submitViewCntData } from '../../Utils/submitViewCnt';

function NavBar() {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(['jwt']);

  async function handleLogout() {
    try {
      await submitViewCntData();
      localStorage.removeItem('viewCnt');
      removeCookie('jwt');
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/home">
            <img
              className="main_banner_logo"
              alt="homelogo"
              style={{ width: '200px' }}
              src={process.env.PUBLIC_URL + '/img/mainLogo.PNG'}
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate('/map');
              }}
            >
              map
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/list');
              }}
            >
              list
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/chart');
              }}
            >
              chart
            </Nav.Link>
          </Nav>
          <SearchUi />
        </Container>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </Navbar>
    </>
  );
}

export default NavBar;
