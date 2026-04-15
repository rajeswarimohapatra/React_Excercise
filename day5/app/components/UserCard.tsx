export default function UserCard({ user }: any) {
  return (
    <div className="bg-white text-black p-5 rounded-xl shadow-lg hover:scale-105 transition">
      <div className="w-14 h-14 bg-indigo-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
        {user.name.charAt(0)}
      </div>

      <h3 className="text-lg font-semibold text-center">{user.name}</h3>
      <p className="text-sm text-center">{user.email}</p>
      <p className="text-sm text-center">{user.address.city}</p>
      <p className="text-xs text-center text-gray-500">
        {user.company.name}
      </p>
    </div>
  );
}