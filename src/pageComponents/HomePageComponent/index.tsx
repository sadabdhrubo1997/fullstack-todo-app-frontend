/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { scrollToTop } from '../../utils/scrollToTop';

const antIcon = <LoadingOutlined style={{ fontSize: 60 }} spin />;

const HomePageComponent: FC = () => {
  const navigate = useNavigate();

  const { auth } = useSelector((state: any) => state);

  const handleRedirection = () => {
    setTimeout(() => {
      if (auth.isLoggedIn && !auth?.isLoading) {
        return navigate('/dashboard');
      } else {
        navigate('/login');
      }
    }, 2000);
  };

  useEffect(() => {
    handleRedirection();
  }, [auth.isLoading]);

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <Wrapper>
      <Spin indicator={antIcon} />
    </Wrapper>
  );
};

export default HomePageComponent;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;
