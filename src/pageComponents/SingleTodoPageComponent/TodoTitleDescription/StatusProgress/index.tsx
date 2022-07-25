import { Progress } from 'antd';
import ActionButtons from './ActionButtons';
import {
  Wrapper,
  StatusWrapper,
  StatusText,
  ActionButtonWrapper,
} from './Styles';



const StatusProgress = () => {
  return (
    <>
      <Wrapper>
        <StatusWrapper>
          <StatusText>Status: &nbsp; New Todo</StatusText>
          <ActionButtonWrapper>
            <ActionButtons />
          </ActionButtonWrapper>
        </StatusWrapper>
        <Progress
          type="circle"
          percent={Math.floor(100.5)}
          width={55}
          status="exception"
          // status="normal"
          //   showInfo={true}
          strokeColor="blue"
        />
      </Wrapper>
    </>
  );
};

export default StatusProgress;

// note for conditional rendering

// todo status ->  new(New), started(Ongoing), paused(Paused), delete todo
// todo status action ->  start todo(if todo is new), pause todo(if todo is started or ongoing), mark as done(if todo is started/ongoing and todo have no subtask), delete todo

// if a todo status is new then start and delete will be accessible
