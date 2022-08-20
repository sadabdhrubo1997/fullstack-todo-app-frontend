export const validateEmail = (email: any) => {
  if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return false;
  }
  return true;
};
