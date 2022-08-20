import { validateEmail } from './../../utils/validator/validateEmail';
import { validatePassword } from './../../utils/validator/validatePassword';

interface ISubmitHandlerProps {
  dataToSend: {
    email: string;
    password: string;
  };
  setError: (v: string) => void;
}

export const handleLoginSubmit = ({
  dataToSend,
  setError,
}: ISubmitHandlerProps) => {
  const { email, password } = dataToSend;

  if (!email) {
    setError('Please enter your email address');
    return false;
  }

  if (!validateEmail(email)) {
    setError('Please enter a valid email address');
    return false;
  }

  if (!password) {
    setError('Please enter your password');
    return false;
  }

  if (!validatePassword(password)) {
    setError(
      'Password should have minimum eight characters, at least one letter and one number'
    );
    return false;
  }
  return true;
};
