import Link from "next/link";
import Head from "next/head";

const Index = () => (
  <div>
    <Head>
      <link rel="stylesheet" href="https://use.typekit.net/xic5qkj.css" />
      <meta property="fb:pages" content="1889930064628347" />

      <script
        type="type/javascript"
        src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js?skin=default"
      />
    </Head>
    <style jsx>{`
      h1 {
        font-family: brandon-grotesque, sans-serif;
        font-weight: 400;
        font-style: normal;
      }
      span {
        font-family: brandon-grotesque;
        font-weight: 700;
        font-style: normal;
        font-size: 11px;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        margin: 0 0.618em;
      }
      span:hover {
        color: rgba(34, 34, 34, 0.4);
        cursor: pointer;
      }
    `}</style>
    <h1>Wkee0701</h1>
    {/* <Link href="/about">
      <p>about</p>
    </Link>
    <Link href="/robots">
      <span>Robots</span>
      <p>robots</p>
    </Link> */}

    <Link href="/notes">
      <span>Notes</span>
    </Link>
    <Link href="/dsalgo">
      <span>Dsalgo</span>
    </Link>
    <Link href="/learning">
      <span>Learning</span>
    </Link>
    <Link href="/people">
      <span>People</span>
    </Link>
    <Link href="/tools">
      <span>Tools</span>
    </Link>
    <Link href="/music">
      <span>Music</span>
    </Link>
    <Link href="/testing">
      <span>Testing</span>
    </Link>
    <Link href="/study">
      <span>Study</span>
    </Link>
    <Link href="/experience">
      <span>Experience</span>
    </Link>
    <Link href="/todo">
      <span>Todo</span>
    </Link>
    <Link href="/css">
      <span>CSS</span>
    </Link>
    <span>
      <a href="https://www.youtube.com/watch?v=W94GFCv00A0">tech design</a>
    </span>
  </div>
);

export default Index;
