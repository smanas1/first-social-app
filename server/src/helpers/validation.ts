export const emailValidator = (email: string) => {
  return String(email)
    .toLocaleLowerCase()
    .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
};

export const nameValidator = (name: string, min: number, max: number) => {
  if (name.length < min || name.length > max) {
    return false;
  } else {
    return true;
  }
};
