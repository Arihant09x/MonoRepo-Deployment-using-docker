import { prismaclient } from "@repo/database/db";

export default async function page() {
  const user = await prismaclient.user.findMany();
  return (
    <div>
      {user.map((users) => (
        <div>
          <p>Username: {users.username}</p>
          <p>password: {users.password}</p>
        </div>
      ))}
    </div>
  );
}
