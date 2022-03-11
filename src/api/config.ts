const ApiVersion = 'v2';
export const baseURL = `https://pokeapi.co/api/${ApiVersion}`;
export const Crypto = false;

const multiForm = {
  headers: {
    'Content-Type': 'multipart/formdata',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
  },
};

export { multiForm };
