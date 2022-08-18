import { Progress } from 'antd';
import ActionButtons from './ActionButtons';
import {
  Wrapper,
  StatusWrapper,
  StatusText,
  ActionButtonWrapper,
  ProgressWrapper,
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
        <ProgressWrapper>
          <Progress
            type="circle"
            percent={Math.floor(80.5)}
            width={100}
            status="normal"
            strokeWidth={7}
            // status="normal"
            // showInfo={true}
            // strokeColor="#FFCC00"
            // strokeColor="#FF4D4F"
            strokeColor="#339900"
          />
        </ProgressWrapper>
      </Wrapper>
    </>
  );
};

export default StatusProgress;

// note for conditional rendering

// todo status ->  new(New), started(Ongoing), paused(Paused), delete todo
// todo status action ->  start todo(if todo is new), pause todo(if todo is started or ongoing), mark as done(if todo is started/ongoing and todo have no subtask), delete todo

// if a todo status is new then start and delete will be accessible
