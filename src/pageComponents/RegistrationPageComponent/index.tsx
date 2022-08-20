import { FC } from 'react';
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
import { Input } from '../../styles/common';

const RegistrationPageComponent: FC = () => {
  return (
    <>
      <MainWrapper>
        <FormWrapper>
          <Heading>Registration</Heading>
          <SingleInputWrapper>
            <InputTitle>First name:</InputTitle>
            <Input placeholder="Enter your first name" />
          </SingleInputWrapper>
          <SingleInputWrapper>
            <InputTitle>Last name:</InputTitle>
            <Input placeholder="Enter your last name" />
          </SingleInputWrapper>
          <SingleInputWrapper>
            <InputTitle>Email:</InputTitle>
            <Input placeholder="Enter your email" />
          </SingleInputWrapper>
          <SingleInputWrapper>
            <InputTitle>Password:</InputTitle>
            <Input type="password" placeholder="Enter your password" />
          </SingleInputWrapper>
          <ButtonWrapper>
            <RegisterButton to="/login">Login Now</RegisterButton>
            <Button type="primary">Register</Button>
          </ButtonWrapper>
        </FormWrapper>
      </MainWrapper>
    </>
  );
};

export default RegistrationPageComponent;
