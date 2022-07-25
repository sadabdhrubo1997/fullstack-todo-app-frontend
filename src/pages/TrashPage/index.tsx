import styled from 'styled-components';
import ProtectedLayout from '../../layout/ProtectedLayout';

const TrashPage = () => {
  return (
    <>
      <ProtectedLayout isPageLoading={false}>
        <>
          <CardWrapper>
            <Card>
              hello todo app. hello todo app. hello todo app. hello todo app.
              hello todo app. hello todo app. hello todo app. hello todo app.
              hello todo app.
            </Card>
            <Card>
              hello todo app. hello todo app. hello todo app. hello todo app.
              hello todo app. hello todo app. hello todo app. hello todo app.
              hello todo app.
            </Card>
            <Card>
              hello todo app. hello todo app. hello todo app. hello todo app.
              hello todo app. hello todo app. hello todo app. hello todo app.
              hello todo app.
            </Card>
          </CardWrapper>
        </>
      </ProtectedLayout>
    </>
  );
};

export default TrashPage;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 350px;
  height: 200px;
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
  margin: 10px;
`;
