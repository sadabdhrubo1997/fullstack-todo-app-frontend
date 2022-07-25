import styled from 'styled-components';
import { Button } from '../../../styles/common';

export const Wrapper = styled.div`
  max-width: 750px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-size: 22px;
  color: var(--color-primary);
  max-width: 45ch;
  margin: 0 0 15px 0;
`;

export const Description = styled.p`
  font-size: 16px;
  color: var(--color-primary);
  margin: 0;
`;

export const InputTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 5px;
  color: var(--color-primary);
`;

export const SingleInputWrapper = styled.div`
  max-width: 750px;
  margin-bottom: 15px;
`;

export const ActionButton = styled(Button)`
  font-size: 12px;
  padding: 6px 10px;
  background-color: rgba(116, 125, 140, 0.1);
  color: var(--color-primary);

  svg {
    width: 15px;
    height: 15px;
    margin-right: 5px;

    path {
      transition: 0.3s;
      fill: var(--color-primary);
    }
  }

  &:hover {
    svg {
      width: 15px;
      height: 15px;
      margin-right: 5px;

      path {
        fill: #fff;
      }
    }
  }
`;
