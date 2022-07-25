import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';
import { useLocation } from 'react-router-dom';

const Topbar = () => {
  const [pageTitle, setPageTitle] = useState<string>('');

  const { pathname } = useLocation();

  const handlePageTitle = (v: string) => {
    setPageTitle(v);
  };

  useEffect(() => {
    if (pathname === '/trash') {
      handlePageTitle('Trash');
    } else if (pathname === '/todos') {
      handlePageTitle('Todo');
    } else if (pathname === '/create-todo') {
      handlePageTitle('Create Todo');
    } else if (pathname.includes('todo')) {
      handlePageTitle(' ');
    } else {
      handlePageTitle('Dashboard');
    }
  }, [pathname]);

  return (
    <>
      <Wrapper>
        <PageTitle>{pageTitle}</PageTitle>
        <Avatar />
      </Wrapper>
    </>
  );
};

export default Topbar;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px 10px 240px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 90;
  background-color: rgb(247, 247, 247);
`;

const PageTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: var(--color-primary);
`;
