import { Routes, Route, useLocation } from 'react-router-dom';
import TodoPage from './pages/TodoPage';
import DashboardPage from './pages/DashboardPage/index';
import TrashPage from './pages/TrashPage/index';

import { AnimatePresence } from 'framer-motion';
import CreateTodoPage from './pages/CreateTodoPage';
import SingleTodoPage from './pages/SingleTodoPage';

const AppRoute = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/todos" element={<TodoPage />} />
        <Route path="/todo/:todo_id" element={<SingleTodoPage />} />
        <Route path="/create-todo" element={<CreateTodoPage />} />
        <Route path="/trash" element={<TrashPage />} />
        <Route path="*" element={<h1>page not found</h1>} />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoute;
