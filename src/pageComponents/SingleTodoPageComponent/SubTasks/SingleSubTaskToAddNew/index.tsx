import { useState } from 'react';
import EditIcon from '../../../../components/icons/EditIcon';
import RemoveIcon from '../../../../components/icons/RemoveIcon';
import { ISubTaskCreate, ISubTaskToAdd } from '../../../../constants/interfaces';
import {
  Action,
  ActionButton,
  Description,
  SingleSubTaskHeading,
  Top,
  Wrapper,
} from './Styles';
import SubTaskAddModal from './SubTaskAddModal';
import { stringShorter } from '../../../../utils/stringShorter';

interface IProps {
  data: ISubTaskToAdd;
  subTasksToAdd: ISubTaskToAdd[];
  setSubTasksToAdd: (v: ISubTaskToAdd[]) => void;
  serial: number;
}

const SingleSubTaskToAddNew = ({ data, serial, subTasksToAdd, setSubTasksToAdd }: IProps) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] =
    useState<boolean>(false);
  const [showSubTaskEditModal, setShowSubTaskEditModal] =
    useState<boolean>(false);

  const handleRemoveSubTask = () => {
    const tempArr = [...subTasksToAdd];
    const tempArr2 = tempArr.filter(
      (subTask: ISubTaskCreate) => subTask.id !== data.id
    );
    setSubTasksToAdd(tempArr2);
  };

  return (
    <>
      <Wrapper>
        <Top>
          <SingleSubTaskHeading>
            {serial}. {data?.title}
          </SingleSubTaskHeading>
          <Action>
            <ActionButton onClick={handleRemoveSubTask}>
              <RemoveIcon />
              Remove
            </ActionButton>
            <ActionButton onClick={() => setShowSubTaskEditModal(true)}>
              <EditIcon />
              Edit
            </ActionButton>
          </Action>
        </Top>
        <Description>
          <span>Description:</span>
          <p>
            {isDescriptionExpanded
              ? data?.description
              : stringShorter(250, 250, data?.description)}
            {data?.description?.length > 250 ? (
              <b
                onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
              >
                {isDescriptionExpanded ? ` see less` : ' see more'}
              </b>
            ) : null}
          </p>
        </Description>
      </Wrapper>
      <>
        <SubTaskAddModal
          showSubTaskEditModal={showSubTaskEditModal}
          setShowSubTaskEditModal={setShowSubTaskEditModal}
          data={data}
          subTasks={subTasksToAdd}
          setSubTasks={setSubTasksToAdd}
        />
      </>
    </>
  );
};

export default SingleSubTaskToAddNew;
