import { Dropdown, Menu } from 'antd';

import StartTodoButton from './StartTodoButton';
import PauseTodoButton from './PauseTodoButton';
import DoneTodoButton from './DoneTodoButton';
import DeleteTodoButton from './DeleteTodoButton';

import { TTodoStatus } from '../../../../../constants/interfaces';
import { useState } from 'react';

// new, ongoing, paused,

const ActionButtons = () => {
  const [todoStatus] = useState<TTodoStatus>('ongoing');
  const [markableAsDone] = useState<boolean>(false);

  const startBtn = [
    {
      label: <StartTodoButton />,
      key: '1',
    },
  ];
  const pauseBtn = [
    {
      label: <PauseTodoButton />,
      key: '2',
    },
  ];
  const doneBtn = [
    {
      label: <DoneTodoButton />,
      key: '3',
    },
  ];
  const deleteBtn = [
    {
      label: <DeleteTodoButton />,
      key: '4',
    },
  ];

  const menu = (
    <Menu
      items={[
        ...(todoStatus === 'new' ? startBtn : []),
        ...(todoStatus === 'ongoing' ? pauseBtn : []),
        ...(todoStatus === 'ongoing' && markableAsDone === true ? doneBtn : []),
        ...deleteBtn,
      ]}
    />
  );

  return (
    <>
      <Dropdown.Button trigger={['click']} overlay={menu}></Dropdown.Button>
    </>
  );
};

export default ActionButtons;
