'use client';

import React from "react";
import { useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Login } from "@/apis/login/api/login";
import { useRouter } from 'next/navigation';
import { SnackbarAlert } from "@/components/pages/login/snackbarAlert/snackbarAlert";

export default function LoginPage() {

  const [mail_address, setMailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [mailAddressErrors, setMailAddressErrors] = useState('');
  const [passwordErrors, setPasswordErrors] = useState('');
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const handleClose = () => {
    setOpen(false);
  };

  // ログイン処理
  const login = async () => {
    const { status, data } = await Login(mail_address, password);
    if (status === 422) {
      // バリデーションエラー'
      setMailAddressErrors(data.detail.mail_address || '');
      setPasswordErrors(data.detail.password || '');
    } else if (status === 200) {
      // ログイン成功
      document.cookie = `token=${data.access_token}; path=/;`;
      router.push('/');
    } else {
      // ログイン失敗
      setOpen(true);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div>
        <p className="text-center text-2xl font-bold mb-9">社内目安箱</p>
        <form className="flex flex-col">
          <TextField
            className="w-96 mb-9"
            id="mail_address"
            label="メールアドレス"
            variant="filled"
            value={mail_address}
            onChange={(e) => setMailAddress(e.target.value)}
            error={!!mailAddressErrors}
            helperText={mailAddressErrors}
          />
          <TextField
            className="w-96 mb-9"
            id="password"
            type="password"
            label="パスワード"
            variant="filled"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!passwordErrors}
            helperText={passwordErrors}
          />
          <Button variant="contained" className="w-96" onClick={login}>
            ログイン
          </Button>
        </form>
      </div>

      {/* ログイン失敗時に表示するSnackbarAlert */}
      <SnackbarAlert
        open={open}
        severity="error"
        message="ログインに失敗しました。再度お試しください。"
        onClose={handleClose}
      />
    </div>
  );
}
