import styled from 'styled-components';

import { Dropdown, Menu, Modal } from 'antd';

import DeleteTodoButton from './DeleteTodoButton';
import EditButton from './EditButton';
import DoneTodoButton from './DoneTodoButton';
import { ExclamationCircleOutlined } from '@ant-design/icons';

// new, ongoing, paused,

interface IProps {
  data: any;
  setShowSubTaskEditModal: (v: boolean) => void;
}

const deleteConfirm = () => {
  Modal.confirm({
    title: 'Confirm',
    icon: <ExclamationCircleOutlined style={{ color: '#FF4D4F' }} />,
    content: 'Are you sure you want to delete this sub task?',
    okText: 'Yes',
    cancelText: 'No',
    onOk: () => {
      console.log('you pressed okay to delete sub task');
    },
  });
};

const editConfirm = (
  data: any,
  setShowSubTaskEditModal: (v: boolean) => void
) => {
  if (data?.status === 'incomplete') {
    return setShowSubTaskEditModal(true);
  } else {
    Modal.confirm({
      title: 'Confirm',
      icon: <ExclamationCircleOutlined />,
      content:
        'This sub-task is already done.  If you edit this, then it will appear as an incomplete sub-task',
      okText: 'Okay',
      cancelText: 'Cancel',
      onCancel: () => {
        setShowSubTaskEditModal(false);
        console.log('you pressed cancel');
      },
      onOk: () => {
        setShowSubTaskEditModal(true);
        console.log('you pressed okay');
      },
    });
  }
};

const ActionButtons = ({ data, setShowSubTaskEditModal }: IProps) => {
  console.log(data);
  const menu = (
    <Menu
      items={[
        {
          label: <DoneTodoButton />,
          key: '1',
        },
        {
          label: (
            <EditButton
              confirm={() => editConfirm(data, setShowSubTaskEditModal)}
            />
          ),
          key: '2',
        },
        {
          label: <DeleteTodoButton deleteHandler={deleteConfirm} />,
          key: '3',
        },
      ]}
    />
  );

  return (
    <Wrapper>
      <Dropdown.Button trigger={['click']} overlay={menu}></Dropdown.Button>
    </Wrapper>
  );
};

export default ActionButtons;

const Wrapper = styled.div`
  .ant-btn-group {
    button:first-child {
      display: none;
    }
  }
`;
