export const Login = async(mail_address: string, password: string)=> {
  // ログインAPI の実行
  const response = await fetch("http://localhost:3001/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include',
    body: JSON.stringify({
      mail_address,
      password,
    }),
  });

  // レスポンスデータをJSONとしてパース
  return response.json().then((data) => ({
    status: response.status,
    data,
  }));
}