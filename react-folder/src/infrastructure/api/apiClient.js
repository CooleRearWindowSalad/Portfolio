export const apiClient = {
  get: async (endpoint, options = {}) => {
    return request(endpoint, { ...options, method: 'GET' });
  },
  post: async (endpoint, body, options = {}) => {
    return request(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(body)
    });
  },
  put: async (endpoint, body, options = {}) => {
    return request(endpoint, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(body)
    });
  },
  delete: async (endpoint, options = {}) => {
    return request(endpoint, { ...options, method: 'DELETE' });
  }
};

async function request(endpoint, options = {}) {
  const response = await fetch(`${import.meta.env.VITE_API_URL || 'https://jsonplaceholder.typicode.com'}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {})
    },
    ...options
  });

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  const text = await response.text();
  return text ? JSON.parse(text) : null;
}
