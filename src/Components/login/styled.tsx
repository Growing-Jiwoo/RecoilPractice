import styled, { keyframes } from 'styled-components';

const blinkAnimation = keyframes`
  50% {
    background-color: gray;
    color: white;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: white;
  padding-bottom: 70px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid gray;
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  background-color: gray;
  color: white;
  border: none;
  cursor: pointer;
  margin: 4% 0px 0px 0px;

  &:hover {
    animation: ${blinkAnimation} 0.5s linear infinite;
  }
`;

export const LogoImage = styled.img`
  width: 424px;
  position: flex;
  margin: 0px 0px 40px 0px;
`;
