const API_URL = 'https://api.vertical.chulakov.dev';

export async function login(email: string, password: string) {
  const response = await fetch(`${API_URL}/api/auth/signin/email`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.message || 'Ошибка авторизации');
  }

  return response.json();
}
