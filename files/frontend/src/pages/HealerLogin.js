import React from "react";

function HealerLogin() {
  return (
    <div>
      <h2>Healer Login</h2>
      <form>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default HealerLogin;