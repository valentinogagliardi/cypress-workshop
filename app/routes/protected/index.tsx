import { redirect } from "@remix-run/node";

import type { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async ({ request }) => {
  const cookies = request.headers.get("Cookie") || "";
  if (!cookies.includes("sessionid")) {
    return redirect("/login");
  }

  return {};
};

const Index = () => {
  return (
    <div>
      <h1>Congrats!</h1>
      <p>If you're here, it means you are authenticated!</p>
    </div>
  );
};

export default Index;
