'use client';

import { logout } from '@/lib/actions/authActions';

export default function SignOutButton() {
  return (
    <form action={() => logout()}>
      <button
        type='submit'
        className='px-2 py-1 border cursor-pointer'
      >
        Logout
      </button>
    </form>
  );
}
