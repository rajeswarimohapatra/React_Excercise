"use client";

import { use } from "react";
import UserCard from "./UserCard";

export default function UserList({ usersPromise }: any) {
  const users = use(usersPromise);

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {(users as any[]).map((user) => (
  <UserCard key={user.id} user={user} />
))}
    </div>
  );
}