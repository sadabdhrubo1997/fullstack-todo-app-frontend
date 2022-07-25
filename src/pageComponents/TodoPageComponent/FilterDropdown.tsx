import styled from 'styled-components';

import { Button, Dropdown, Menu } from 'antd';
import { TTodosCategory } from '../../constants/interfaces';
import { handleTodosPageHeadingByCategory } from '../../utils/handleTodosPageHeadingByCategory';
import { DownOutlined } from '@ant-design/icons';

const Label = styled.p<any>`
  font-size: 14px;
  margin: 0;
`;

interface IProps {
  todoCategory: TTodosCategory;
  setTodoCategory: (v: TTodosCategory) => void;
}

const FilterDropdown = ({ todoCategory, setTodoCategory }: IProps) => {
  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: <Label onClick={() => setTodoCategory('all')}>All</Label>,
        },
        {
          key: '2',
          label: (
            <Label onClick={() => setTodoCategory('ongoing')}>Ongoing</Label>
          ),
        },
        {
          key: '3',
          label: (
            <Label onClick={() => setTodoCategory('paused')}>Paused</Label>
          ),
        },
        {
          key: '4',
          label: (
            <Label onClick={() => setTodoCategory('done')}>Completed</Label>
          ),
        },
      ]}
    />
  );
  return (
    <>
      <Dropdown overlay={menu} placement="bottomLeft">
        <Button>
          {handleTodosPageHeadingByCategory(todoCategory).split(' ')[0]}
          <DownOutlined />
        </Button>
      </Dropdown>
    </>
  );
};

export default FilterDropdown;
