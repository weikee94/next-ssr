import Link from "next/link";
import Head from "next/head";

const Index = () => (
  <div>
    <Head>
      <link rel="stylesheet" href="https://use.typekit.net/xic5qkj.css" />
    </Head>
    <style jsx>{`
      h1 {
        font-family: brandon-grotesque, sans-serif;
        font-weight: 400;
        font-style: normal;
      }
    `}</style>
    <h1>SSR Magician</h1>
    <Link href="/about">
      <button>About</button>
    </Link>
    <Link href="/robots">
      <button>Robots</button>
    </Link>
    <Link href="/notes">
      <button>Notes</button>
    </Link>
    <Link href="/dsalgo">
      <button>Dsalgo</button>
    </Link>
    <Link href="/learning">
      <button>Learning</button>
    </Link>
    <Link href="/people">
      <button>People</button>
    </Link>
    <Link href="/tools">
      <button>Tools</button>
    </Link>
  </div>
);

export default Index;
