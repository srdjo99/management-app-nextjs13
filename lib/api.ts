export const fetcher = async ({ url, method, body, json = true }) => {
  const res = await fetch(url, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      'User-Agent': '*',
      // prettier-ignore
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });

  console.log(res);

  if (!res.ok) {
    throw new Error('API Error');
  }

  if (json) {
    const data = await res.json();
    return data.data;
  }
};

export const register = (user) => {
  return fetcher({ url: '/api/register', method: 'POST', body: user });
};

export const signin = (user) => {
  return fetcher({ url: '/api/signin', method: 'POST', body: user });
};

export const createNewProject = async (name) => {
  return fetcher({ url: '/api/project', method: 'POST', body: { name } });
};
