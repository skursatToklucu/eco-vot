export const validEmail = (email: string) => {
  const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  if (email !== "" && email.length <= 320 && emailRegex.test(email)) {
    return true;
  }
  return false;
};
