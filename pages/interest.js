import Link from "next/link";
import Image from "../components/Image";

const Interest = () => {
  return (
    <div>
      <p>Coursera</p>
      <p>Intro to tensor flow</p>
      <p>Edx</p>
      <p>
        Hiskio
        <a
          href="https://hiskio.com/courses/251/hi?skio=HIMONEY&fbclid=IwAR1oyAsK1PtZZ7u3gzbbj-3lpcJm5wAb8xDc1vT-0SwdsQYMMTvpHQHtMcg
"
        >
          python
        </a>
      </p>
      <p>fireship youtube</p>
      <p>
        <img
          style={{ width: "100%" }}
          src="/static/roadmap.jpg"
          alt="roadmap"
        />
      </p>
    </div>
  );
};

export default Interest;
