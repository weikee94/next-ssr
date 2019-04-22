import Link from "next/link";

const People = () => {
  return (
    <div style={{ fontSize: "20px", color: "blue" }}>
      <h1>People</h1>
      <ul>
        <li>
          <a href="https://discordapp.com/channels/475334635505713153/475334636193447958">
            dicord community
          </a>
        </li>
        <li>
          <a href="https://www.cubui.com/">Andy</a>
        </li>
        <li>
          <a href="https://github.com/imandyie">Andy github</a>
        </li>
        <li>
          <a href="https://www.robinwieruch.de/">Robin</a>
        </li>
        <li>
          <a href="http://jxy.me/2017/10/01/who-am-i/#more">foolbear</a>
        </li>
        <li>
          <a href="https://hollygabrielle.com/">gabrielle uk</a>
        </li>
      </ul>
    </div>
  );
};

export default People;
