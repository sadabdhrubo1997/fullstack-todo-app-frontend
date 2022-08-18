import styled from 'styled-components';

export const MainWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.h2`
  margin-bottom: 30px;
  text-align: center;
`;

export const FormWrapper = styled.div`
  min-width: 500px;
  border-radius: 10px;
  /* box-shadow: 0 10px 50px rgba(233, 233, 233, 0.692); */
  padding: 20px;
  background-color: #fff;
`;

export const Error = styled.p`
  text-align: center;
  font-size: 14px;
  color: red;
`;
