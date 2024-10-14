import { API_URL } from '@/lib/config';

export const getSuggestions = async () => {
  // 意見一覧取得API の実行
  const response = await fetch(`${API_URL}/suggestions`, {
    method: "GET",
    headers: {
    },
  });

  const data = await response.json();
  
  return {
    status: response.status,
    data,
  };
}