import { useState } from 'react';
import { Tooltip } from 'antd';

import { ISubTaskCreate } from '../../../../constants/interfaces';

import SubTaskEditModal from './SubTaskEditModal';
import { stringShorter } from '../../../../utils/stringShorter';
import ActionButtons from './ActionButtons';
import BlueTickIcon from '../../../../components/icons/BlueTickIcon';

import {
  Action,
  Description,
  SingleSubTaskHeading,
  Top,
  Wrapper,
} from './Styles';

interface IProps {
  data: any;
  subTasks: ISubTaskCreate[];
  setSubTasks: (v: ISubTaskCreate[]) => void;
  serial: number;
}

const SingleSubTaskToShow = ({
  data,
  serial,
  subTasks,
  setSubTasks,
}: IProps) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] =
    useState<boolean>(false);

  const [showSubTaskEditModal, setShowSubTaskEditModal] =
    useState<boolean>(false);
  console.log(data);

  return (
    <>
      <Wrapper>
        <Top>
          <SingleSubTaskHeading>
            {serial}. {data?.title}
          </SingleSubTaskHeading>

          <Action>
            {!!(data?.status === 'complete') && (
              <Tooltip
                placement="top"
                title={<span>The sub task is done. </span>}
              >
                <span style={{ display: 'flex' }}>
                  <BlueTickIcon />
                </span>
              </Tooltip>
            )}
            <ActionButtons
              data={data}
              setShowSubTaskEditModal={setShowSubTaskEditModal}
            />
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

export default SingleSubTaskToShow;
