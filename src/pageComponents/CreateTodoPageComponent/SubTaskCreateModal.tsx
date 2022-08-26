import { Modal } from 'antd';
import { useState } from 'react';
import { ISubTaskCreate } from '../../constants/interfaces';
import { Input, InputErrorText, Textarea } from '../../styles/common';
import { InputTitle, SingleInputWrapper } from './Styles';

interface IProps {
  setShowSubTaskCreateModal: (v: boolean) => void;
  showSubTaskCreateModal: boolean;
  handleAddSubTask: (v: ISubTaskCreate) => void;
}

const SubTaskCreateModal = ({
  setShowSubTaskCreateModal,
  showSubTaskCreateModal,
  handleAddSubTask,
}: IProps) => {
  const [error, setError] = useState('');
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleAddSubTaskWithOk = () => {
    if (!title) {
      setError('Please enter the Sub Task Title');
      return;
    }
    if (!description) {
      setError('Please enter the Sub Task Description');
      return;
    }

    if (title.length > 100) {
      setError('Title can not be more then 100 characters');
      return;
    }

    if (description.length > 1000) {
      setError('Description can not be more then 1000 characters');
      return;
    }

    handleAddSubTask({
      title,
      description,
      id: Date.now(),
    });

    setTitle('');
    setDescription('');
    setShowSubTaskCreateModal(false);
  };

  const handleCancel = () => {
    setTitle('');
    setDescription('');
    setShowSubTaskCreateModal(false);
  };

  return (
    <>
      <Modal
        title="Add Sub Task"
        visible={showSubTaskCreateModal}
        onOk={handleAddSubTaskWithOk}
        onCancel={handleCancel}
        okText="Add"
      >
        <SingleInputWrapper>
          <InputTitle>Sub Task Title</InputTitle>
          <Input
            name="title"
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setError('');
              setTitle(e.target.value);
            }}
            placeholder="Enter sub task title here..."
          />
        </SingleInputWrapper>
        <SingleInputWrapper>
          <InputTitle>Sub Task Description</InputTitle>
          <Textarea
            name="description"
            value={description}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setError('');
              setDescription(e.target.value);
            }}
            placeholder="Enter sub task description here..."
          />
        </SingleInputWrapper>
        <InputErrorText>{error}</InputErrorText>
      </Modal>
    </>
  );
};

export default SubTaskCreateModal;
