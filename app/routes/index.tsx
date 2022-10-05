import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div>
      <h1>Welcome to the Cypress Workshop!</h1>
      <h2>Here are a series of exercises to be taken in order.</h2>
      <div className="wrapper">
        <Link to="/protected">[01 - Intermediate] Authentication testing</Link>
        <Link to="/todo">[02 - Intermediate] Permission testing</Link>
      </div>
    </div>
  );
}
