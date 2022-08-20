export const validatePassword = (password: any) => {
  const regex = new RegExp(/^(?=.*[A-Za-z])(?=.*\d).{8,}$/);

  return regex.test(password);
};
