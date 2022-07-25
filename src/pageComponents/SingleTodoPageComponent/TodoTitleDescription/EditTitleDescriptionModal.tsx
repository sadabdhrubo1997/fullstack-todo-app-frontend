import { Modal } from 'antd';
import { useState } from 'react';
// import { ICreateTask } from '../../../constants/interfaces';
import { Input, Textarea } from '../../../styles/common';
import { InputTitle, SingleInputWrapper } from './Styles';

interface IProps {
  setShowEditModal: (v: boolean) => void;
  showEditModal: boolean;
  // data: any;
}

const EditTitleDescriptionModal = ({
  setShowEditModal,
  showEditModal,
}: // handleAddSubTask,
IProps) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  // const handleAddSubTaskWithOk = () => {
  //   handleAddSubTask({
  //     title,
  //     description,
  //     id: Date.now(),
  //   });
  //   console.log({
  //     title,
  //     description,
  //     id: Date.now(),
  //   });
  //   setTitle('');
  //   setDescription('');
  //   setShowEditModal(false);
  // };

  const handleUpdate = ()=>{
    console.log("update todo title description handler firing")
  }

  const handleCancel = () => {
    setTitle('');
    setDescription('');
    setShowEditModal(false);
  };

  return (
    <>
      <Modal
        title="Add Sub Task"
        visible={showEditModal}
        onOk={handleUpdate}
        onCancel={handleCancel}
        okText="Add"
      >
        <SingleInputWrapper>
          <InputTitle>Sub Task Title</InputTitle>
          <Input
            name="title"
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
            placeholder="Enter todo title here..."
          />
        </SingleInputWrapper>
        <SingleInputWrapper>
          <InputTitle>Sub Task Description</InputTitle>
          <Textarea
            name="description"
            value={description}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDescription(e.target.value)
            }
            placeholder="Enter todo description here..."
          />
        </SingleInputWrapper>
      </Modal>
    </>
  );
};

export default EditTitleDescriptionModal;
