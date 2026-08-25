export const loginUser = async (credentials) => {
  return {
    id: 1,
    name: credentials.email.split('@')[0],
    email: credentials.email,
    token: 'demo-token'
  };
};
