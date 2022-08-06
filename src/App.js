import './App.css';
import React, { useState } from "react"
import One from "./components/page1";
import Second from "./components/page2";
import Third from "./components/page3";
import Fourth from "./components/page4";
import Logo from "./assets/logo.png";

function App() {

  const [secPage, setSecPage] = useState(false);
  const [ThirdPage, setThirdPage] = useState(false);
  const [LastPage, setLastPage] = useState(false);

  return (
    <div className="App">
      <div className='main-head'>
        <img src={Logo} alt="" height="45px" style={{ marginTop: "1.2rem" }} />
        <h1>Eden</h1>
      </div>
      <div className='container'>
        <div className='page-container'>
          <div
            className='circle'
            style={{
              backgroundColor: "rgb(110, 5, 209)",
              border: "none",
              color: "#fff"
            }}
          >
            <div className='page-no'>1</div>
          </div>
          <div
            className='divider'
            style={{ backgroundColor: "rgb(110, 5, 209)" }}></div>
        </div>
        <div className='page-container'>
          <div
            className='divider'
            style={{ backgroundColor: secPage ? "rgb(110, 5, 209)" : "" }}>
          </div>
          <div
            className='circle'
            style={{
              backgroundColor: secPage ? "rgb(110, 5, 209)" : "",
              border: secPage ? "none" : "",
              color: secPage ? "#fff" : ""
            }}>
            <div className='page-no'>2</div>
          </div>
          <div
            className='divider'
            style={{ backgroundColor: secPage ? "rgb(110, 5, 209)" : "" }}>
          </div>
        </div>
        <div className='page-container'>
          <div
            className='divider'
            style={{ backgroundColor: ThirdPage ? "rgb(110, 5, 209)" : "" }}>
          </div>
          <div
            className='circle'
            style={{
              backgroundColor: ThirdPage ? "rgb(110, 5, 209)" : "",
              border: ThirdPage ? "none" : "",
              color: ThirdPage ? "#fff" : ""
            }}>
            <div className='page-no'>3</div>
          </div>
          <div
            className='divider'
            style={{ backgroundColor: ThirdPage ? "rgb(110, 5, 209)" : "" }}>
          </div>
        </div>
        <div className='page-container'>
          <div
            className='divider'
            style={{ backgroundColor: LastPage ? "rgb(110, 5, 209)" : "" }}>
          </div>
          <div
            className='circle'
            style={{
              backgroundColor: LastPage ? "rgb(110, 5, 209)" : "",
              border: LastPage ? "none" : "", color: LastPage ? "#fff" : ""
            }}>
            <div className='page-no'>4</div>
          </div>
        </div>
      </div>
      {
        secPage && !ThirdPage && !LastPage ? <Second ThirdPage={setThirdPage} /> :
          ThirdPage && !LastPage ? <Third LastPage={setLastPage} /> :
            LastPage ? <Fourth /> :
              <One secPage={setSecPage} />
      }
    </div>
  );
}

export default App;
