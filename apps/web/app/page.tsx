import { prismaclient } from "@repo/database/db";

export default async function page() {
  const user = await prismaclient.user.findMany();
  return (
    <div>
      {user.map((users, key) => (
        <div key={key}>
          <p>Username: {users.username}</p>
          <p>password: {users.password}</p>
        </div>
      ))}
    </div>
  );
}
