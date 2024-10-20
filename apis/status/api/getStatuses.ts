import { API_URL } from '@/lib/config';
import { parse } from 'cookie';

export const getStatuses = async () => {

  // document.cookie をパースしてオブジェクトとして取得
  const cookies = parse(document.cookie);
  // ステータス一覧取得API の実行
  const response = await fetch(`${API_URL}/statuses`, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      'Authorization': `Bearer ${cookies.token}`,
    },
  });

  // レスポンスをJSON形式にパース
  const responseData = await response.json();

  return {
    responseStatus: response.status,
    responseData,
  };
}