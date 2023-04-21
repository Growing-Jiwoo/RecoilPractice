import { useState } from 'react';
import { Container, Form, Input, Button, LogoImage } from './styled';
import { useCookies } from 'react-cookie';
import useAxiosWithAuth from '../../Hooks/useAxiosWithAuth';
import { useNavigate } from 'react-router-dom';

function LoginScreen(): JSX.Element {
  const axiosInstance = useAxiosWithAuth();
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['jwt']);
  const [values, setValues] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e: any) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('users/login/', values);
      setCookie('jwt', response.data.token);
      navigate('/home');
    } catch (error) {
      throw '로그인 실패';
    }
  };

  return (
    <Container>
      <LogoImage src={process.env.PUBLIC_URL + '/img/mainLogo.PNG'} />
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Username"
          name="username"
          value={values.username}
          onChange={handleChange}
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        <Button>Login</Button>
      </Form>
    </Container>
  );
}

export default LoginScreen;
