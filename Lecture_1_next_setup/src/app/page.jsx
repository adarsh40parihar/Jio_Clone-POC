import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div >
      <main >
        I am Home
        <ul className="flex items-center gap-2 justify-center">
          <Link href="/about">About</Link>
          <Link href="/contact">contact</Link>
          <Link href="/about/me">ME</Link>
        </ul>
      </main>
    </div>
  ); 
}
