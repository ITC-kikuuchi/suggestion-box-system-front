'use client';

import { useRouter } from 'next/navigation';
import { Button } from "@mui/material";
import { useUser } from '@/context/loginUserContext';

export default function Header() {
  const { user } = useUser();
  const router = useRouter();

  // ログアウト処理
  const logout = () => {
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    router.push('/login');
  };

  return (
    <header className="h-16 bg-neutral-500 flex items-center justify-between px-5">
      <p className="text-2xl text-white">社内目安箱</p>
      <div className="flex items-center">
        <p className="text-white mr-5">{user?.unknown}</p>
        <Button
          className="text-white border-white hover:bg-neutral-600"
          variant="outlined"
          onClick={logout}
        >
          ログアウト
        </Button>
      </div>
    </header>
  );
}
