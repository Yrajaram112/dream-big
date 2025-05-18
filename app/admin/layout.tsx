'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

 useEffect(() => {
  const isLoggedIn = localStorage.getItem('adminAuth');
  if (!isLoggedIn) router.push('/admin/login');
}, [router]);

  return <div className="p-4">{children}</div>;
}