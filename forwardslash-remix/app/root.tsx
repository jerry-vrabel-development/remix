import * as React from "react";
import { Scripts } from "@remix-run/react";
import { LiveReload } from "@remix-run/react";

export default function App() {
  const [count, setCount] = React.useState(0);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Forwardslash Development</title>
      </head>
      <body>
        <h1>Hello world</h1>
        <button onClick={() => setCount((c) => c + 1)}>{count}</button>
        <LiveReload />
        <Scripts />
      </body>
    </html>
  );
}
