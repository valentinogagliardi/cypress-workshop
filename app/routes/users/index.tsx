import { useLoaderData } from "@remix-run/react";
import { fetch } from "@remix-run/node";

export const loader = async () => {
  const response = await fetch(`${process.env.BASE_API_URL}/users`);

  if (response.ok) {
    const users = await response.json();

    return { users };
  }
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
};

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
}

const Users = () => {
  const { users } = useLoaderData<{ users: User[] }>();

  return (
    <div>
      <h1>USER LIST</h1>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    </div>
  );
};

export default Users;
