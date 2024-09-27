// api.ts
export const registerUser = async (firstName: string, lastName: string, email: string, password: string) => {
  const response = await fetch('http://localhost:3000/api/users/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ first_name: firstName, last_name: lastName, email, password }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'ユーザー登録に失敗しました');
  }

  return data;
};

export const registerAdmin = async (firstName: string, lastName: string, email: string, password: string) => {
  const response = await fetch('http://localhost:3000/api/admin/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ first_name: firstName, last_name: lastName, email, password }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || '管理者登録に失敗しました');
  }

  return data;
};
