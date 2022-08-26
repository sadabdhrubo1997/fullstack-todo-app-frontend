import { FC, useEffect, useState } from 'react';
import { Button } from 'antd';

import {
  MainWrapper,
  Heading,
  FormWrapper,
  SingleInputWrapper,
  InputTitle,
  ButtonWrapper,
  RegisterButton,
} from './Styles';
import { Input, InputErrorText } from '../../styles/common';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { IUserRegistrationData } from '../../constants/interfaces';

import { handleRegistrationSubmit } from './functions';
import { userRegistration } from '../../redux/auth/action';
import { scrollToTop } from '../../utils/scrollToTop';

const RegistrationPageComponent: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState<string>('');
  const [dataToSend, setDataToSend] = useState<IUserRegistrationData>({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError('');
    setDataToSend((prevState: IUserRegistrationData) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = () => {
    if (handleRegistrationSubmit({ dataToSend, setError })) {
      dispatch(userRegistration(dataToSend, navigate));
    }
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <MainWrapper>
        <FormWrapper>
          <Heading>Registration</Heading>
          <SingleInputWrapper>
            <InputTitle>First name:</InputTitle>
            <Input
              onChange={handleChange}
              name="firstName"
              placeholder="Enter your first name"
            />
          </SingleInputWrapper>
          <SingleInputWrapper>
            <InputTitle>Last name:</InputTitle>
            <Input
              onChange={handleChange}
              name="lastName"
              placeholder="Enter your last name"
            />
          </SingleInputWrapper>
          <SingleInputWrapper>
            <InputTitle>Email:</InputTitle>
            <Input
              onChange={handleChange}
              name="email"
              placeholder="Enter your email"
            />
          </SingleInputWrapper>
          <SingleInputWrapper>
            <InputTitle>Password:</InputTitle>
            <Input
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="Enter your password"
            />
          </SingleInputWrapper>
          <InputErrorText>{error}</InputErrorText>
          <ButtonWrapper>
            <RegisterButton to="/login">Login Now</RegisterButton>
            <Button onClick={handleSubmit} type="primary">
              Register
            </Button>
          </ButtonWrapper>
        </FormWrapper>
      </MainWrapper>
    </>
  );
};

export default RegistrationPageComponent;
