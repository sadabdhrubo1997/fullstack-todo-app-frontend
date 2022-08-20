import { ReactNode } from 'react';
import styled from 'styled-components';

import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar/index';

interface IProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: IProps) => {
  return (
    <>
      <Topbar />
      <Sidebar />
      <Wrapper>
        <Inner>{children}</Inner>
      </Wrapper>
    </>
  );
};

export default DashboardLayout;

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
