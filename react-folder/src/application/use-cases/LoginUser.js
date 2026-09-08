export const loginUser = async (credentials = {}) => {
  const email = String(credentials.email || '').trim();
  const password = String(credentials.password || '').trim();

  if (!email || !password) {
    throw new Error('Email and password are required');
  }

  if (!email.includes('@')) {
    throw new Error('Please enter a valid email address');
  }

  if (password.length < 6) {
    throw new Error('Password must be at least 6 characters');
  }

  const userId = Date.now();

  return {
    id: userId,
    name: email.split('@')[0].replace(/[._-]/g, ' '),
    email,
    token: `demo-token-${userId}`
  };
};
