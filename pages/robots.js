import Link from "next/link";
import fetch from "isomorphic-unfetch";

const Robots = props => {
  return (
    <div>
      <h1>Robots</h1>
      <Link href="/">
        <button>home</button>
      </Link>
      <div>
        {props.robots.map((robot, i) => (
          <div key={i}>
            <Link href={`robot/${robot.id}`}>
              <a>{robot.name}</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

Robots.getInitialProps = async function() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);

  return {
    robots: data
  };
};

export default Robots;
