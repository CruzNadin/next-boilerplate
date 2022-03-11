export const useApi = (apiFunc: any) => {
  const request = async (...args: any) => {
    const response = await apiFunc(args);
    if (!response.success) {
      console.info(response.data?.message);
    }
    return response;
  };

  return {
    request,
  };
};
