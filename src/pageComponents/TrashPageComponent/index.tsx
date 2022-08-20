import styled from 'styled-components';
import DashboardLayout from '../../layout/DashboardLayout';

const TrashPageComponent = () => {
  return (
    <>
      <DashboardLayout>
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
      </DashboardLayout>
    </>
  );
};

export default TrashPageComponent;

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
