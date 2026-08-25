export const formatName = (name = 'User') => {
  if (!name || !String(name).trim()) {
    return 'Guest';
  }

  return String(name).trim();
};

export const formatDate = (value) => {
  const date = value ? new Date(value) : new Date();
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};
