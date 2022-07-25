import styled from 'styled-components';

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;

  @media (max-width: 1250px) {
    width: 95%;
  }
`;

export const Input = styled.input<any>`
  background: none;
  border: 1px solid rgba(116, 125, 140, 0.5);
  border-radius: 5px;
  outline: none;
  padding: 8px 10px;
  font-size: 16px;
  font-weight: 400;
  color: var(--color-primary);
  display: inline-block;
  width: 100%;

  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
    font-family: 'Poppins', sans-serif;
  }

  &:-ms-input-placeholder {
    color: rgba(0, 0, 0, 0.4);
    font-family: 'Poppins', sans-serif;
  }

  &::-ms-input-placeholder {
    color: rgba(0, 0, 0, 0.4);
    font-family: 'Poppins', sans-serif;
  }
`;

export const Textarea = styled.textarea<any>`
  background: none;
  border: 1px solid rgba(116, 125, 140, 0.5);
  border-radius: 5px;
  outline: none;
  padding: 8px 10px;
  font-size: 16px;
  font-weight: 400;
  color: var(--color-primary);
  display: inline-block;
  width: 100%;
  resize: none;
  height: 180px;

  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
    font-family: 'Poppins', sans-serif;
  }

  &:-ms-input-placeholder {
    color: rgba(0, 0, 0, 0.4);
    font-family: 'Poppins', sans-serif;
  }

  &::-ms-input-placeholder {
    color: rgba(0, 0, 0, 0.4);
    font-family: 'Poppins', sans-serif;
  }
`;

export const Button = styled.div<any>`
  display: inline-flex;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  background-color: var(--color-primary);
  padding: 10px 20px;
  transition: 0.3s;
  cursor: pointer;
  user-select: none;

  &:hover {
    color: #fff;
    background-color: var(--color-primary-deep1);
  }
`;
