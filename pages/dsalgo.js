import Link from "next/link";
import Head from "next/head";

const Dsalgo = () => {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/xic5qkj.css" />
        <script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js?skin=sunburst" />
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
      <h1>Data structure algorithms</h1>
      <pre className="prettyprint lang-js">{`// log all pairs of array
const boxes = [1,2,3,4,5];

function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j])
    }
  }
}

logAllPairsOfArray(boxes);

// O(n^2) nested for loop - quadratic time

`}</pre>

      <pre className="prettyprint lang-js">
        {`// print all numbers and all pair sums
function printAllNumbersThenAllPairSums(numbers) {
  console.log('these are numbers');
  numbers.forEach(function(number) {
    console.log(number)
  })

  console.log('these are the sums');
  numbers.forEach(function(firstNumber) {
    numbers.forEach(function(secondNumber) {
      console.log(firstNumber + secondNumber);
    })
  })
}

printAllNumbersThenAllPairSums([1,2])`}
      </pre>

      <ul>
        <li>
          <a href="https://repl.it/@wei94/bigo">online example</a>
        </li>
        <li>
          <a href="http://bigocheatsheet.com/">big o cheat sheet</a>
        </li>
        <li>
          <a href="https://leetcode-cn.com/explore/interview/card/top-interview-quesitons-in-2018/">
            leetcode cn
          </a>
        </li>
        <li>
          <a href="https://app.codility.com/programmers/lessons/1-iterations/">
            Codility for programmers
          </a>
        </li>
        <li>
          <a href="https://brilliant.org/courses/?tour=true#featured">
            brilliant course
          </a>
        </li>
        <li>
          <a href="http://www.cxyxiaowu.com/#recommend-sections">小吴</a>
        </li>
        <li>
          <a href="https://medium.com/codingluka/%E4%B8%8D%E7%AE%A1%E4%BD%A0%E6%98%AF%E5%89%8D%E7%AB%AF-%E5%BE%8C%E7%AB%AF-%E5%85%87%E7%8B%A0%E7%9A%84%E8%AE%8A%E5%BC%B7%E5%90%A7-%E9%A5%85%E9%A0%AD%E8%A8%88%E7%95%AB%E7%AC%AC%E9%9B%B6%E6%9C%9F-%E6%88%90%E6%9E%9C%E5%88%86%E4%BA%AB-81918be92ca4">
            luka
          </a>
        </li>
      </ul>
      <p>
        <img
          style={{ width: "30%" }}
          src="/static/bigorule3.jpg"
          alt="roadmap"
        />
        <img
          style={{ width: "30%" }}
          src="/static/oquadratic.jpg"
          alt="big-o-quadratic"
        />
      </p>
    </div>
  );
};

export default Dsalgo;
