export const loginAdmin = async (email: string, password: string) => {
  const response = await fetch('http://localhost:3000/api/admin/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'ログインに失敗しました');
  }

  return data;
};

export const loginUser = async (email: string, password: string) => {
  const response = await fetch('http://localhost:3000/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'ログインに失敗しました');
  }

  return data;
};
