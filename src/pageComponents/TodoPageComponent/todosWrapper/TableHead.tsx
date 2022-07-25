import styled from 'styled-components';

const TableHead = () => {
  return (
    <Wrapper>
      <Title>Single Todo</Title>
      <Status>Status</Status>
      <Progress>Progress</Progress>
      <Action>Action</Action>
    </Wrapper>
  );
};

export default TableHead;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Field = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  font-size: 20px;
  font-weight: 600;
  justify-content: center;
  color: var(--color-primary-deep1);
`;

const Title = styled(Field)`
  width: 55%;
`;

const Status = styled(Field)`
  width: 15%;
  justify-content: center;
`;

const Progress = styled(Field)`
  width: 15%;
  justify-content: center;
`;

const Action = styled(Field)`
  width: 15%;
  justify-content: center;
`;
