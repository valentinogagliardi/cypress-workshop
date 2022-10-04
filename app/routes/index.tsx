import { Link } from "@remix-run/react";

import styles from "../styles/index.css";

const links = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function Index() {
  return (
    <div>
      <h1>Welcome to the Cypress Workshop!</h1>
      <div className="wrapper">
        <Link to="/posts">Go to the posts list (fetch client-side)</Link>
        <Link to="/users">Go to the users list (fetch server-side)</Link>
      </div>
    </div>
  );
}

export { links };
