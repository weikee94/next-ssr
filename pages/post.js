import { withRouter } from "next/router";
import Head from "next/head";

const Page = withRouter(props => (
  <div>
    <Head>
      <script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js?skin=default" />
    </Head>
    <style jsx>{`
      pre.prettyprint {
        border: none !important;
        font-family: Consolas, Menlo, Monaco, "Lucida Console",
          "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono",
          "Courier New", monospace, sans-serif;
        background-color: rgb(239, 240, 241);
      }
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
    <h1>{props.router.query.type}</h1>
    <p>reverse string</p>
    <pre className="prettyprint lang-js">
      {`
        function reverseStr(str) {
            var ans = [];
            var arr = str.split(" ");
            for (let i in arr) {
              ans.push(arr[arr.length - 1 - i]);
              i++;
            }
            return ans.toString();
          }
          
          reverseStr("A B C");
        `}
    </pre>

    <pre className="prettyprint lang-js">
      {`
        function reverseS(s) {
            // check input
            if (!s || s.length < 2 || typeof s !== 'string') {
              return 'that is not good';
            }
          
            const backwards = [];
            const totalItems = s.length - 1;
          
            for (let i = totalItems; i >= 0; i--) {
              backwards.push(s[i]);
            }
          
            return backwards.join('');
          }
        `}
    </pre>

    <pre className="prettyprint lang-js">
      {`
        function reverseS2(s) {
            return s.split("").reverse().join("");
        }
      `}
    </pre>

    <pre className="prettyprint lang-js">
      {`
        const reverse3 = str => str.split('').reverse().join('');
      `}
    </pre>

    <pre className="prettyprint lang-js">
      {`
        const reverse4 = str => [...str].reverse().join('');
      `}
    </pre>

    <p>
      merge sorted array - In this case a - b returns a negative number if a is
      smaller than b – so a will be sorted to the left of b a positive number if
      a is bigger than b – so a will be sorted to the right of b zero if they
      are equal – so it doesn’t matter which one comes first
    </p>

    <pre className="prettyprint lang-js">
      {`
        function mArr(arrA, arrB) {

            const concatArr = arrA.concat(arrB);
        
            concatArr.sort((a, b) => {
                return b - a;
            })
            return concatArr;
        }
        `}
    </pre>
  </div>
));

export default Page;
