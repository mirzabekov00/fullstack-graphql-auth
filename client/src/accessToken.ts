export let accessToken: string = "";

export const getAccessToken = () => {
  return accessToken;
};

export const setAccessToken = (s: string) => {
  accessToken = s;
};
