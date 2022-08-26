/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState } from 'react';
import { Button } from 'antd';

import { Input, InputErrorText } from '../../styles/common';
import { IUserLoginData } from '../../constants/interfaces';
import { handleLoginSubmit } from './functions';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../redux/auth/action';

import {
  MainWrapper,
  Heading,
  FormWrapper,
  SingleInputWrapper,
  InputTitle,
  ButtonWrapper,
  RegisterButton,
} from './Styles';
import { useNavigate } from 'react-router-dom';
import { scrollToTop } from '../../utils/scrollToTop';

const LoginPageComponent: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState<string>('');
  const [dataToSend, setDataToSend] = useState<IUserLoginData>({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError('');
    setDataToSend((prevState: IUserLoginData) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = () => {
    if (handleLoginSubmit({ dataToSend, setError })) {
      dispatch(userLogin(dataToSend, navigate));
    } else {
      console.error(error);
    }
  };


  useEffect(() => {
    scrollToTop();
  }, []);


  return (
    <>
      <MainWrapper>
        <FormWrapper>
          <Heading>Login</Heading>
          <SingleInputWrapper>
            <InputTitle>Email:</InputTitle>
            <Input
              type="email"
              name="email"
              value={dataToSend.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </SingleInputWrapper>
          <SingleInputWrapper>
            <InputTitle>Password:</InputTitle>
            <Input
              name="password"
              value={dataToSend.password}
              onChange={handleChange}
              type="password"
              placeholder="Enter your password"
            />
          </SingleInputWrapper>
          <InputErrorText>{error}</InputErrorText>
          <ButtonWrapper>
            <RegisterButton to="/register">Register Now</RegisterButton>
            <Button type="primary" onClick={handleSubmit}>
              Login
            </Button>
          </ButtonWrapper>
        </FormWrapper>
      </MainWrapper>
    </>
  );
};

export default LoginPageComponent;
