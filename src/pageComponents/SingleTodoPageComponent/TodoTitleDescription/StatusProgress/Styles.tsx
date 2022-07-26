import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  right: 20px;
  top: 90px;
  width: 250px;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
`;

export const StatusWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StatusText = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: var(--color-primary);
`;

export const ActionButtonWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  .ant-btn-group {
    button:first-child {
      display: none;
    }
  }
`;

export const StatusActionButton = styled.span<any>``;

export const DeleteActionButton = styled(StatusActionButton)`
  color: red;
`;

export const ProgressWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  /* display:none; */

  .ant-progress-circle .ant-progress-text {
    color: black;
    user-select: none;
  }
`;
