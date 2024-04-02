import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>CSS Playground</h1>

      <ul>
        <li>
          <Link href="/colors">Colors</Link>
        </li>
      </ul>
    </main>
  );
}
