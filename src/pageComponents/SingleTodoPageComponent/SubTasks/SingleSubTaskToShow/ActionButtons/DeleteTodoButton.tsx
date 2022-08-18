import styled from 'styled-components';

interface IProps {
  deleteHandler: any;
}

const DeleteTodoButton = ({ deleteHandler }: IProps) => {
  return (
    <>
      <ButtonTextWrapper onClick={deleteHandler}>Delete</ButtonTextWrapper>
    </>
  );
};

export default DeleteTodoButton;

const ButtonTextWrapper = styled.div`
  display: block;
  color: #ff4d4f;
  cursor: pointer;
`;
