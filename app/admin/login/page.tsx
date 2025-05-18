'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch('/api/adminLogin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password }),
    });

    const result = await res.json();
    if (result.success) {
      localStorage.setItem('adminAuth', 'true');
      router.push('/admin');
    } else {
      alert('Incorrect password');
    }
  } catch (err) {
    console.error('Login failed:', err);
    alert('Login error occurred');
  }
};


  return (
    <section id="deposit" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-5/12 xl:w-6/12">
            <div className="wow fadeInUp shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]" data-wow-delay=".15s">

              <h2 className="text-2xl font-bold mb-4">Admin Login</h2>

              <form onSubmit={handleLogin}>
                {/* <input
                  type="text"
                  name="user"
                  value={userName}
                  onChange={handleChange}
                  placeholder="Deposit Amount in NRs"
                  className="mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3"
                /> */}
                <input
                  type="password"
                  name='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="mb-4 w-full rounded-sm border bg-[#f8f8f8] text-black placeholder-gray-500 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 px-6 py-3"
                />
                <input
                  type="submit"
                  value="Login"
                  className="w-full cursor-pointer rounded-sm bg-primary px-9 py-4 text-base font-medium text-white"
                />
              </form>
              <p className="mt-4 text-sm text-red-600">{status}</p>

            </div>
          </div>
        </div>
      </div></section>
  );
}
