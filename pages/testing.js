import Link from "next/link";
import React, { Component } from "react";
class Testing extends Component {
  render() {
    return (
      <div style={{ fontSize: "20px", color: "blue" }}>
        <h1>Testing</h1>
        <ul>
          <li>
            <a href="https://still-garden-18430.herokuapp.com/">still garden</a>
          </li>
          <li>
            <a href="https://afternoon-cove-96245.herokuapp.com/">
              afternoon-cove
            </a>
          </li>
          <li>
            <a href="https://calm-shelf-29855.herokuapp.com">calm shelf</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Testing;
