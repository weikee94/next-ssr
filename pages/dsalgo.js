import Link from "next/link";

const Dsalgo = () => {
  return (
    <div style={{ fontSize: "20px", color: "blue" }}>
      <h1>Data structure algorithms</h1>
      <ul>
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
          style={{ width: "50%" }}
          src="/static/bigorule3.jpg"
          alt="roadmap"
        />
        <img
          src="/static/oquadratic.jpg"
          alt="big-o-quadratic"
          style={{ width: "50%" }}
        />
      </p>
    </div>
  );
};

export default Dsalgo;
