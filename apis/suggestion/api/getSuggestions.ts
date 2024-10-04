import { cookies } from 'next/headers';

export const getSuggestions = async () => {
  const token = cookies().get('token')?.value;
  // 意見一覧取得API の実行
  const response = await fetch("http://localhost/suggestions", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  });

  const data = await response.json();
  
  return {
    status: response.status,
    data,
  };
}