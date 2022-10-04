import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div>
      <h1>Welcome to the Cypress Workshop!</h1>
      <h2>Here are a series of exercises to be taken in order.</h2>
      <div className="wrapper">
        <Link to="/users/create">
          [01 - Fundamentals] Form testing, network stubbing
        </Link>
        <Link to="/posts">[01 - Fundamentals] Network stubbing</Link>
        <Link to="/users">[01 - Fundamentals] SSR Network stubbing</Link>
      </div>
    </div>
  );
}
