"use client";
import { useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

interface ResponseData {
  newUser: User;
  users: User[];
}

export default function Home() {
  const [data, setData] = useState<ResponseData | null>(null);

  async function handleClick() {
    try {
      const response = await fetch('/api/prismaExample', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: 'Elliott',
          email: 'xelliottx@example-user.com'
        }),
      });
      const result: ResponseData = await response.json();
      setData(result);
      console.log(result);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 onClick={handleClick}>Click Here!</h1>
      <h1>Click</h1>
      {data && (
        <div>
          <h2>New User:</h2>
          <p>{data.newUser.name} - {data.newUser.email}</p>
          <h2>All Users:</h2>
          <ul>
            {data.users.map(user => (
              <li key={user.id}>{user.name} - {user.email}</li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
