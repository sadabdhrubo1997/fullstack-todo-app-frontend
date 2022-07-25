import { TTodosCategory } from '../constants/interfaces';

export const handleTodosPageHeadingByCategory = (
  category: TTodosCategory
): string => {
  if (category === 'all') {
    return 'All Todos';
  }

  if (category === 'done') {
    return 'Completed Todos';
  }

  if (category === 'paused') {
    return 'Paused Todos';
  }

  if (category === 'ongoing') {
    return 'Ongoing Todos';
  }
  return category;
};
