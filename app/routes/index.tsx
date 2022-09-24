import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div>
      <h1>Welcome to the Cypress Workshop!</h1>
      <div>
        <Link to="/users">Go to the users list</Link>
      </div>
    </div>
  );
}
