import Link from "next/link";
import Image from "../components/Image";

const Notes = () => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        <li>
          <a href="https://jsonplaceholder.typicode.com">fake api</a>
        </li>
        <li>
          <a href="https://www.mockapi.io">mock api</a>
        </li>
        <li>
          <a href="https://fastlane.tools/">app automation fastlane</a>
        </li>
        <li>
          <a href="http://react-china.org/t/topic/10499/9">hide webpack data</a>
        </li>
        <li>
          <a href="https://github.com/wallstreetcn/webpack-and-spa-guide">
            webpack 4 spa guide
          </a>
        </li>
        <li>
          <a href="https://panjiachen.github.io/awesome-bookmarks/blog/webpack/webpack4-a.html">
            webpack 4 update
          </a>
        </li>
        <li>
          <a href="https://medium.freecodecamp.org/how-to-develop-react-js-apps-fast-using-webpack-4-3d772db957e4">
            webpack 4 setup
          </a>
        </li>
        <li>
          <a href="https://juejin.im/post/5c62b92de51d457fd77b22ce">
            frontend interview
          </a>
        </li>
        <li>
          <a href="https://www.yuque.com/fe9/basic?fbclid=IwAR2ABOv33TSVWst11GAe4Y3MLghc-2TU18UXLBPPYYbty415NoZv0dkeWxk">
            前端九部
          </a>
        </li>
        <li>
          <a href="https://ionicons.com/">icon collector</a>
        </li>
        <li>
          <a href="https://medium.freecodecamp.org/how-to-work-with-react-the-right-way-to-avoid-some-common-pitfalls-fc9eb5e34d9e">
            right way to write react
          </a>
        </li>
        <li>
          <a href="https://medium.freecodecamp.org/css-naming-conventions-that-will-save-you-hours-of-debugging-35cea737d849">
            css naming
          </a>
        </li>
        <li>
          <a href="https://blog.techbridge.cc/2019/01/26/functional-css/?fbclid=IwAR1pmsA83QO_JoJ7xXOsi8UAiQY03uNK2m_jpoDhoLwG4RFq24YgiaMSgwM">
            functional css
          </a>
        </li>
        <li>
          <a href="https://adamwathan.me/css-utility-classes-and-separation-of-concerns/?fbclid=IwAR2c6KmHVrvJjYGPa4o7JLDmzJJQp2AVaXxZLZu8KaHa_jPAfNUWS04lup8">
            css utility
          </a>
        </li>
        <li>
          <a href="https://www.kaggle.com/">data science kaggle</a>
        </li>
        <li>
          <a href="https://www.twitch.tv/codetv_io/">twitch code live</a>
        </li>
        <li>
          <a href="https://blog.solutotlv.com/size-matters/">
            react native responsive
          </a>
        </li>
        <li>
          <a href="https://medium.com/@KenjiChao/2016-17-%E7%BE%8E%E5%9C%8B%E8%BB%9F%E9%AB%94%E5%B7%A5%E7%A8%8B%E5%B8%AB%E6%B1%82%E8%81%B7%E5%BF%83%E5%BE%97-a5c00427fa73">
            interview us
          </a>
        </li>
        <li>
          <a href="https://github.com/cereallarceny/cra-ssr">cra-ssr</a>
        </li>
        <li>
          <a href="https://blog.csdn.net/qq_42185834/article/details/80459309">
            react native full screen
          </a>
        </li>
        <li>
          <a href="https://blog.callstack.io/react-native-meets-iphonex-a0f5034f7a41">
            iphonex react native
          </a>
        </li>
        <li>
          <a href="https://codepen.io/srph/pen/WrPywK?editors=1111">
            react tagging input
          </a>
        </li>
        <li>
          <a href="https://medium.com/@shanerudolfworktive/7-tips-to-develop-react-native-uis-for-all-screen-sizes-7ec5271be25c">
            react native all screens
          </a>
        </li>
        <li>
          <a href="https://code.tutsplus.com/tutorials/get-started-with-layouts-in-react-native--cms-27418">
            react native layout
          </a>
        </li>
        <li>
          <a href="https://medium.com/wix-engineering/the-full-react-native-layout-cheat-sheet-a4147802405c">
            react native layout cheatsheet
          </a>
        </li>
        <li>
          <a href="https://medium.com/the-react-native-log/understanding-react-native-flexbox-layout-7a528200afd4">
            react native flexbox layout
          </a>
        </li>
        <li>
          <a href="https://medium.com/d-d-mag/%E6%B7%B1%E5%85%A5%E6%8E%A2%E8%A8%8E-redux-%E8%88%87-react-redux-f6230d6ae83f">
            react redux
          </a>
        </li>
        <li>
          <a href="https://blog.reactnativecoach.com/understanding-flex-in-react-native-b34dfb4b16d1">
            flebox react native
          </a>
        </li>
        <li>
          <a href="https://cloudinary.com/">image cdn </a>
        </li>
        <li>
          <a href="https://www.sparksine.com/">看书的地方</a>
        </li>
        <li>
          <a href="https://react-native.shop/">
            react native idea and ui practice
          </a>
        </li>
        <li>
          <a href="https://medium.freecodecamp.org/every-time-you-build-a-to-do-list-app-a-puppy-dies-505b54637a5d">
            ideas
          </a>
        </li>
        <li>
          ssr
          <ul>
            <li>
              <a href="https://medium.com/@cereallarceny/server-side-rendering-with-create-react-app-fiber-react-router-v4-helmet-redux-and-thunk-275cb25ca972">
                ssr part one
              </a>
            </li>
            <li>
              <a href="https://medium.com/@cereallarceny/server-side-rendering-in-create-react-app-with-all-the-goodies-without-ejecting-4c889d7db25e">
                ssr part two
              </a>
            </li>
            <li>
              <a href="https://medium.freecodecamp.org/demystifying-reacts-server-side-render-de335d408fe4">
                react ssr
              </a>
            </li>
            <li>
              <a href="https://scotch.io/tutorials/getting-started-with-react-hooks?fbclid=IwAR0maYiuJTL8221_Aeti6GaMbiXHo4vQZPRsV8VIkY341vzq8nHR4tv2M_Q">
                react hooks
              </a>
            </li>
            <li>
              <a href="https://android-developers.googleblog.com/2017/03/update-your-app-to-take-advantage-of.html">
                android full screen
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Notes;
