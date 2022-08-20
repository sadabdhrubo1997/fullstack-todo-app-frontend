import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MainWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  color: var(--color-primary);
`;

export const FormWrapper = styled.div`
  min-width: 500px;
  border-radius: 10px;
  /* box-shadow: 0 10px 50px rgba(233, 233, 233, 0.692); */
  padding: 20px;
  background-color: #fff;
`;

export const InputTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 5px;
  color: var(--color-primary);
`;

export const SingleInputWrapper = styled.div`
  max-width: 650px;
  margin-bottom: 15px;
`;

export const Error = styled.p`
  text-align: center;
  font-size: 14px;
  color: red;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RegisterButton = styled(Link)<any>``;
