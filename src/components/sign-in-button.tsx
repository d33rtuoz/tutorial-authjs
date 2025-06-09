"use client";

import { login } from "@/lib/actions/authActions";

export default function SignInButton() {
  return (
    <form action={() => login()}>
      <button type="submit" className="cursor-pointer ">
        Sign in via GitHub
      </button>
    </form>
  );
}
