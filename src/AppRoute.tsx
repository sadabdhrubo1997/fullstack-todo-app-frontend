import { Routes, Route } from 'react-router-dom';
import TodoPage from './pages/TodoPage';
import DashboardPage from './pages/DashboardPage/index';
import TrashPage from './pages/TrashPage/index';
import CreateTodoPage from './pages/CreateTodoPage';
import SingleTodoPage from './pages/SingleTodoPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import RegistrationPage from './pages/RegistrationPage';
import ProtectedOutlet from './components/ProtectedOutlet';
import PublicOutlet from './components/PublicOutlet';

const AppRoute = () => {
  return (
    <Routes>
      {/* public pages */}
      <Route element={<PublicOutlet />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegistrationPage />} />
      </Route>

      {/* protected pages */}
      <Route element={<ProtectedOutlet />}>
        <Route index element={<HomePage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="todos" element={<TodoPage />} />
        <Route path="todo/:todo_id" element={<SingleTodoPage />} />
        <Route path="create-todo" element={<CreateTodoPage />} />
        <Route path="trash" element={<TrashPage />} />
      </Route>

      {/* not found route */}
      <Route path="*" element={<h1>page not found</h1>} />
    </Routes>
  );
};

export default AppRoute;
