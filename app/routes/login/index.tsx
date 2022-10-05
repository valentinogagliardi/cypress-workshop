import { createCookie, redirect } from "@remix-run/node";

import type { ActionFunction } from "@remix-run/node";

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();

  const email = form.get("email");
  const password = form.get("password");

  if (email === process.env.EMAIL && password === process.env.PASSWORD) {
    const cookie = createCookie("sessionid", {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
    });
    return redirect("/protected", {
      headers: { "Set-Cookie": await cookie.serialize(cookie) },
    });
  }

  return redirect("/login");
};

const Login = () => {
  return (
    <div className="container">
      <h2>Login to access protected content</h2>
      <form method="POST" action="?index">
        <div className="form">
          <div className="form__aside">
            <div className="form__field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required />
            </div>
            <div className="form__field">
              <label htmlFor="password">Password</label>
              <input id="password" name="password" type="password" required />
            </div>
          </div>
        </div>
        <div className="form__buttons">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
