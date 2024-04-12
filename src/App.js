import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Component } from "react";

import Home from "./components/Home";
import CreateCharacter from "./components/CreateCharacter";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route exact path="/create-character" elemnt={<CreateCharacter/>} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
