import {
  DeleteOutlined,
  ImportOutlined,
  SyncOutlined,
} from '@ant-design/icons';
import { Button, Space, Switch, Select, Spin } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';
import { Container } from './../styles/common';
// import { motion } from 'framer-motion';

const { Option } = Select;

const StyledSelectOption = styled(Option)`
  color: red;
  padding: 10px;
`;

const children: React.ReactNode[] = [];
for (let i = 10; i < 36; i++) {
  children.push(
    <StyledSelectOption key={i.toString(36) + i}>
      {i.toString(36) + i}
    </StyledSelectOption>
  );
}

const handleSelectChange = (value: string[]) => {
  console.log(`selected ${value}`);
};

const antIcon = <SyncOutlined style={{ fontSize: 50 }} spin />;

const Navbar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAnimate, setIsAnimate] = useState(false);

  return (
    <Container>
      <StyledSpace size={10}>
        <StyledButton type="primary">
          Home <ImportOutlined />
        </StyledButton>
        <StyledButton type="ghost">Contact</StyledButton>
        <StyledButton type="dashed">Contact</StyledButton>
        <StyledButton type="link">About</StyledButton>
        <StyledButton type="text" onClick={() => setIsAnimate(!isAnimate)}>
          Animate
        </StyledButton>
        <StyledButton type="default" onClick={() => setIsLoading(!isLoading)}>
          About
        </StyledButton>
      </StyledSpace>
      <Switch
        defaultChecked
        onChange={(checked: any) => console.log(`switch to ${checked}`)}
      />
      <StyledSelect
        mode="multiple"
        allowClear
        style={{ width: '100%' }}
        placeholder="Please select"
        onChange={handleSelectChange}
      >
        {children}
      </StyledSelect>
      <br />
      <Spin spinning={true} delay={500} />
      <Spin indicator={antIcon} spinning={isLoading}>
        <br />
        {/* <motion.h1
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          initial={{ y: 50, opacity: 0 }}
        >
          hello
        </motion.h1> */}
      </Spin>
      <DeleteOutlined style={{ color: 'red', fontSize: '24px' }} />
    </Container>
  );
};

export default Navbar;

const StyledSpace = styled(Space)`
  padding: 20px 0;
  width: 100%;
`;

const StyledButton = styled(Button)`
  font-size: 16px;
  font-weight: 600;
  height: unset;
  padding: 5px 20px;
  display: flex;
  align-items: center;
`;

const StyledSelect = styled(Select)<any>``;
