import { API_URL } from '@/lib/config';
import { parse } from 'cookie';

export const getSuggestions = async () => {
  // document.cookie をパースしてオブジェクトとして取得
  const cookies = parse(document.cookie);

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