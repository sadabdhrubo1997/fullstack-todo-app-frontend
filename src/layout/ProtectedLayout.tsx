import { ReactNode } from 'react';
import styled from 'styled-components';

import { SyncOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar/index';

interface IProps {
  children: ReactNode;
  isPageLoading: boolean;
}

const antIcon = <SyncOutlined style={{ fontSize: 50 }} spin />;

const ProtectedLayout = ({ children, isPageLoading }: IProps) => {
  return (
    <>
      <Main
        style={{
          maxHeight: '100vh',
          width: '100vw',
          overflowX: 'hidden',
        }}
        indicator={antIcon}
        spinning={isPageLoading}
      >
        <Topbar />
        <Sidebar />
        <Wrapper>
          <Inner>{children}</Inner>
        </Wrapper>
      </Main>
    </>
  );
};

export default ProtectedLayout;

const Main = styled(Spin)`
  height: 100vh !important;
`;

const Wrapper = styled.div`
  padding: 90px 20px 20px 240px;
  position: relative;
  background-color: rgb(247, 247, 247);
  min-height: 105vh;
  z-index: 80;
`;

const Inner = styled.div`
  width: 100%;
`;
