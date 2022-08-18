import styled from 'styled-components';
import { Button } from '../../styles/common';

export const Wrapper = styled.div`
  margin-top: 15px;
  max-width: 750px;
`;

export const TodoTitleAndDescriptionWrapper = styled.div`
  margin-bottom: 20px;
`;

export const InputTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 5px;
  color: var(--color-primary);
`;

export const SingleInputWrapper = styled.div`
  max-width: 650px;
  margin-bottom: 15px;
`;

export const SubTaskWrapper = styled.div`
  margin: 40px 0;
  max-width: 650px;
`;

export const SubTaskHeading = styled.h3`
  font-size: 18px;
  color: var(--color-primary);
  font-weight: 500;
`;

export const AddSubTaskButtonWrapper = styled.div`
  display: flex;
  margin-top: 50px;
`;

export const AddSubTaskButton = styled(Button)<any>`
  font-size: 12px;
  padding: 6px 10px;
  color: #747d8c;
  background-color: rgba(116, 125, 140, 0.2);

  &:hover {
    background-color: rgba(116, 125, 140, 1);
  }
`;

export const ProceedNewSubTaskButton = styled(Button)<any>`
  font-size: 12px;
  padding: 6px 10px;
  margin-left: 10px;
`;
