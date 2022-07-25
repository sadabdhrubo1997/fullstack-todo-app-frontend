export const handleLimitSkipWithPage = (limit: number, page: number) => {
  const obj = {
    skip: (page - 1) * limit,
    paramsString: `limit=${limit}&skip=${(page - 1) * limit}`,
  };

  return obj;
};
