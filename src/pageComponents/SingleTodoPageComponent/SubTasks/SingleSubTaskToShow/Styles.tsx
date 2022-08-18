import styled from 'styled-components';
import { Button } from '../../../../styles/common';

export const Wrapper = styled.div`
  margin: 30px 0;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const SingleSubTaskHeading = styled.h3`
  font-size: 22px;
  font-weight: 600;
  color: var(--color-primary);
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: calc(100% - 180px);
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: var(--color-primary);
  font-weight: 400;
  word-break: break-all;
  text-align: left;

  span {
    display: block;
    font-weight: 600;
  }

  b {
    cursor: pointer;
  }
`;

export const Action = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    margin-left: 5px;
  }
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
