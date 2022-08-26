import { validateEmail } from './../../utils/validator/validateEmail';
import { validatePassword } from './../../utils/validator/validatePassword';

interface ISubmitHandlerProps {
  dataToSend: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  };
  setError: (v: string) => void;
}

export const handleRegistrationSubmit = ({
  dataToSend,
  setError,
}: ISubmitHandlerProps) => {
  const { email, password, firstName, lastName } = dataToSend;

  if (!firstName) {
    setError('Please enter your first Name');
    return false;
  }

  if (firstName.length > 20) {
    setError('First Name can not be more then 20 characters.');
    return false;
  }
  if (!lastName) {
    setError('Please enter your first Name');
    return false;
  }

  if (lastName.length > 20) {
    setError('Last Name can not be more then 20 characters.');
    return false;
  }

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
