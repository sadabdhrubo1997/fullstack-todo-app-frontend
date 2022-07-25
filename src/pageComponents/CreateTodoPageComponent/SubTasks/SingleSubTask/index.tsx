import { useState } from 'react';
import EditIcon from '../../../../components/icons/EditIcon';
import RemoveIcon from '../../../../components/icons/RemoveIcon';
import { ISubTaskCreate } from '../../../../constants/interfaces';
import {
  Action,
  ActionButton,
  Description,
  SingleSubTaskHeading,
  Top,
  Wrapper,
} from './Styles';
import SubTaskEditModal from './SubTaskEditModal';
import { stringShorter } from './../../../../utils/stringShorter';

interface IProps {
  data: ISubTaskCreate;
  subTasks: ISubTaskCreate[];
  setSubTasks: (v: ISubTaskCreate[]) => void;
  serial: number;
}

const SingleSubTask = ({ data, serial, subTasks, setSubTasks }: IProps) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] =
    useState<boolean>(false);
  const [showSubTaskEditModal, setShowSubTaskEditModal] =
    useState<boolean>(false);

  const handleRemoveSubTask = () => {
    const tempArr = [...subTasks];
    const tempArr2 = tempArr.filter(
      (subTask: ISubTaskCreate) => subTask.id !== data.id
    );
    setSubTasks(tempArr2);
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
        <SubTaskEditModal
          showSubTaskEditModal={showSubTaskEditModal}
          setShowSubTaskEditModal={setShowSubTaskEditModal}
          data={data}
          subTasks={subTasks}
          setSubTasks={setSubTasks}
        />
      </>
    </>
  );
};

export default SingleSubTask;
