// This is going to be our Home Page.
// Here page.js(next.js) == index.js(in react)

"use client";
import Link from "next/link";
import { useState } from "react";

// The way routing works in next.js is, all the folders inside the /app directory will be treated as a route, and inside that page.js/jsx/ts/tsx file will be treated as entry file for that route.
export default function Home() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="">
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setCounter(0)}>Reset</button>
      <button onClick={() => setCounter(counter - 1)}>Decrease</button>
    </div>
  );
}
