import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import styled from 'styled-components';

const antIcon = <LoadingOutlined style={{ fontSize: 60 }} spin />;
const FullScreenLoading = () => (
  <>
    <Wrapper>
      <Spin indicator={antIcon} />
    </Wrapper>
  </>
);

export default FullScreenLoading;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;
