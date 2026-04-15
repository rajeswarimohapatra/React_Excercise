import UserList from "./components/UserList";

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}

export default function Home() {
  const usersPromise = getUsers();

  return (
    <main className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
      <h1 className="text-3xl font-bold text-center mb-6">
        User Gallery
      </h1>

      <UserList usersPromise={usersPromise} />
    </main>
  );
}