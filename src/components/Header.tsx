"use client";

import Link from "next/link";
import { useStackApp, useUser } from "@stackframe/stack";

export function Header() {
  const user = useUser();
  const app = useStackApp();

  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-xl font-bold">
          My Portfolio
        </div>

        <nav className="flex items-center space-x-4">
          <Link href="/" className="text-blue-400 hover:underline">Home</Link>
          <Link href="/projects" className="text-blue-400 hover:underline">Projects</Link>
          <Link href="/about" className="text-blue-400 hover:underline">About</Link>
          {user ? (
            <>
              <span className="text-gray-300">
                Hello, <span className="font-medium text-white">{user.primaryEmail}</span>
              </span>
              <Link
                href={app.urls.signOut}
                className="text-blue-400 hover:underline"
              >
                Sign Out
              </Link>
            </>
          ) : (
            <>
              <Link
                href={app.urls.signIn}
                className="text-blue-400 hover:underline"
              >
                Sign In
              </Link>
              <span className="text-gray-400">|</span>
              <Link
                href={app.urls.signUp}
                className="text-blue-400 hover:underline"
              >
                Sign Up
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
} 