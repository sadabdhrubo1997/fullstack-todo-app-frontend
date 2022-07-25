export const stringShorter = (max: number, take: number, text: string) => {
  if (text?.length > max) {
    return text?.slice(0, take) + ' ...';
  }
  return text;
};
