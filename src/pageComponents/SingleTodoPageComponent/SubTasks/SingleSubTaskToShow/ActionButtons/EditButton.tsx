import styled from 'styled-components';

const EditButton = ({ confirm }: any) => {
  const handleEditModal = () => {
    confirm();
  };

  return (
    <>
      <ButtonTextWrapper onClick={handleEditModal}>Edit</ButtonTextWrapper>
      <></>
    </>
  );
};

export default EditButton;

const ButtonTextWrapper = styled.div`
  display: block;
  cursor: pointer;
`;
