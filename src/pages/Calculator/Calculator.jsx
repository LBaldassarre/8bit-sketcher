import React, { useState } from "react";

import './Calculator.css'
import Nav from '../../components/Nav/Nav';

function Calculator() {

  const [funcSelOpen, setFuncSelOpen] = useState(false);

    return (
      <div>
        <Nav />
        <div className= {funcSelOpen ? 'function_selector fs_open' : 'function_selector'}>
            <ul className='function_list'>
              <li className='function'>Function 1</li>
              <li className='function'>Function 2</li>
              <li className='function'>Function 3</li>
              <li className='function'>Function 4</li>
              <li className='function'>Function 5</li>
              <li className='function'>Function 6</li>
              <li className='function'>Function 7</li>
              <li className='function'>Function 8</li>
              <li className='function'>Function 9</li>
              <li className='function'>Function 10</li>
            </ul>
            <div>
            <span onClick={() => setFuncSelOpen(!funcSelOpen)}><i className = {funcSelOpen ? "uil uil-times pane_btn_close" : "uil uil-times pane_btn_close display_none"}></i></span>
            </div>
        </div>
        <span onClick={() => setFuncSelOpen(!funcSelOpen)}><i className= {!funcSelOpen ? "uil uil-angle-right pane_btn_open" : "uil uil-angle-right pane_btn_open display_none"}></i></span>
        <main className='section container'>
          <h2 className='calculation_title'>Function 1</h2>
          <h3 className='calculation_description'>Description</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quas error veritatis dolorem iure. Exercitationem asperiores reprehenderit, sunt numquam et explicabo. Illo, corporis reprehenderit fugit incidunt voluptatum eveniet possimus. Nostrum.</p>
          <ul className='variable_list'>
            <li className='variable'>a: <input type="text" /></li>
            <li className='variable'>b: <input type="text" /></li>
            <li className='variable'>c: <input type="text" /></li>
            <li className='variable'>b: <input type="text" /></li>
            <li className='variable'>d: <input type="text" /></li>
            <li className='variable'>e: <input type="text" /></li>
            <li className='variable'>f: <input type="text" /></li>
          </ul>
          <div className='buttons'>
            <button className='btn'>Reset</button>
            <button className='btn'>Calculate</button>
          </div>
          <div className='result'>
            Result: 100.004
          </div>
        </main>
      </div>
    );
  }
  
  export default Calculator;