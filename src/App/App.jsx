import React, { Component } from "react";
// import Accordion from "../components/Accordion/Accordion";
import Search from "../components/Search/Search";
import Dropdown from '../components/Dropdown/Dropdown'

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Dropdown/>
      </div>
    );
  }
}

export default App;
