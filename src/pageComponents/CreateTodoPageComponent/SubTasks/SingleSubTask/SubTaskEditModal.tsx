import { Modal } from 'antd';
import { useState } from 'react';
import { ISubTaskCreate } from '../../../../constants/interfaces';
import { Input, Textarea } from '../../../../styles/common';
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
  const [title, setTitle] = useState<string>(data?.title);
  const [description, setDescription] = useState<string>(data?.description);

  const handleEditSubTaskWithOk = () => {
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

export default SubTaskEditModal;
