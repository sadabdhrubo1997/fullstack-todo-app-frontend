import styled from 'styled-components';
import CreateTodoButton from '../../components/CreateTodoButton';
import ProtectedLayout from '../../layout/ProtectedLayout';

const DashboardPage = () => {
  return (
    <>
      <ProtectedLayout isPageLoading={false}>
        <>
          <CreateTodoButtonWrapper>
            <CreateTodoButton />
          </CreateTodoButtonWrapper>
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

export default DashboardPage;

const CreateTodoButtonWrapper = styled.div`
  display: flex;
  margin-bottom: 25px;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Card = styled.div`
  width: 24%;
  height: 200px;
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
`;
