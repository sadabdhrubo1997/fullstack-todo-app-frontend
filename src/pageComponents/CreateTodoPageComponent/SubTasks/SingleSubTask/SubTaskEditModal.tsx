import { Modal } from 'antd';
import { useState } from 'react';
import { ISubTaskCreate } from '../../../../constants/interfaces';
import { Input, InputErrorText, Textarea } from '../../../../styles/common';
import { InputTitle, SingleInputWrapper } from '../../Styles';

interface IProps {
  setShowSubTaskEditModal: (v: boolean) => void;
  showSubTaskEditModal: boolean;
  data: ISubTaskCreate;
  subTasks: ISubTaskCreate[];
  setSubTasks: (v: ISubTaskCreate[]) => void;
}

const SubTaskEditModal = ({
  setShowSubTaskEditModal,
  showSubTaskEditModal,
  data,
  subTasks,
  setSubTasks,
}: IProps) => {
  const [error, setError] = useState('');
  const [title, setTitle] = useState<string>(data?.title);
  const [description, setDescription] = useState<string>(data?.description);

  const handleEditSubTaskWithOk = () => {
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

    const subTaskIndex = subTasks.findIndex(
      (st: ISubTaskCreate) => st?.id === data?.id
    );

    const tempArr = [...subTasks];

    tempArr[subTaskIndex].title = title;
    tempArr[subTaskIndex].description = description;

    setSubTasks(tempArr);
    setShowSubTaskEditModal(false);
  };

  return (
    <>
      <Modal
        title="Edit Sub Task"
        visible={showSubTaskEditModal}
        onOk={handleEditSubTaskWithOk}
        onCancel={() => setShowSubTaskEditModal(false)}
        okText="Save Changes"
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
            placeholder="Enter todo title here..."
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
            placeholder="Enter todo description here..."
          />
        </SingleInputWrapper>
        <InputErrorText>{error}</InputErrorText>
      </Modal>
    </>
  );
};

export default SubTaskEditModal;
