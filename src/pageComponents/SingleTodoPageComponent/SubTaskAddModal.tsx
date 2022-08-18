import { Modal } from 'antd';
import { useState } from 'react';
import { ISubTaskToAdd } from '../../constants/interfaces';
import { Input, Textarea } from '../../styles/common';
import { InputTitle, SingleInputWrapper } from './Styles';

interface IProps {
  setShowSubTaskAddModal: (v: boolean) => void;
  showSubTaskAddModal: boolean;
  handleAddSubTask: (v: ISubTaskToAdd) => void;
}

const SubTaskAddModal = ({
  setShowSubTaskAddModal,
  showSubTaskAddModal,
  handleAddSubTask,
}: IProps) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleAddSubTaskWithOk = () => {
    handleAddSubTask({
      taskId: '100',
      title,
      description,
      id: Date.now(),
    });
    console.log({
      title,
      description,
      id: Date.now(),
    });
    setTitle('');
    setDescription('');
    setShowSubTaskAddModal(false);
  };

  const handleCancel = () => {
    setTitle('');
    setDescription('');
    setShowSubTaskAddModal(false);
  };

  return (
    <>
      <Modal
        title="Add Sub Task"
        visible={showSubTaskAddModal}
        onOk={handleAddSubTaskWithOk}
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
            placeholder="Enter sub task title here..."
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
            placeholder="Enter sub task description here..."
          />
        </SingleInputWrapper>
      </Modal>
    </>
  );
};

export default SubTaskAddModal;
