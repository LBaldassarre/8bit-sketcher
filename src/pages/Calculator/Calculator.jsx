import React, { useState } from "react";

import parse from 'html-react-parser';

import './Calculator.css'
import Nav from '../../components/Nav/Nav';

function Calculator() {

  const [funcSelOpen, setFuncSelOpen] = useState(false);

  const functions = [
    {
      name: 'Function 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quas error veritatis dolorem iure. Exercitationem asperiores reprehenderit, sunt numquam et explicabo. Illo, corporis reprehenderit fugit incidunt voluptatum eveniet possimus. Nostrum.',
      variables: ['a', 'b', 'c', 'd'],
      calculation: 'a+b+c+d',
      expression: 'a + b + c + d',
      selected: true
    },
    {
      name: 'Function 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quas error veritatis dolorem iure. Exercitationem asperiores reprehenderit, sunt numquam et explicabo. Illo, corporis reprehenderit fugit incidunt voluptatum eveniet possimus. Nostrum.',
      variables: ['a', 'b', 'c', 'd'],
      calculation: 'a+b+c+d',
      expression: 'a + b + c + d',
      selected: false
    },
    {
      name: 'Function 3',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quas error veritatis dolorem iure. Exercitationem asperiores reprehenderit, sunt numquam et explicabo. Illo, corporis reprehenderit fugit incidunt voluptatum eveniet possimus. Nostrum.',
      variables: ['a', 'b', 'c', 'd'],
      calculation: 'a+b+c+d',
      expression: 'a + b + c + d',
      selected: false
    },
    {
      name: 'Function 4',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quas error veritatis dolorem iure. Exercitationem asperiores reprehenderit, sunt numquam et explicabo. Illo, corporis reprehenderit fugit incidunt voluptatum eveniet possimus. Nostrum.',
      variables: ['a', 'b', 'c', 'd'],
      calculation: 'a+b+c+d',
      expression: 'a + b + c + d',
      selected: false
    },
    {
      name: 'Function 5',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quas error veritatis dolorem iure. Exercitationem asperiores reprehenderit, sunt numquam et explicabo. Illo, corporis reprehenderit fugit incidunt voluptatum eveniet possimus. Nostrum.',
      variables: ['a', 'b', 'c', 'd'],
      calculation: 'a+b+c+d',
      expression: 'a + b + c + d',
      selected: false
    },
    {
      name: 'Function 6',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quas error veritatis dolorem iure. Exercitationem asperiores reprehenderit, sunt numquam et explicabo. Illo, corporis reprehenderit fugit incidunt voluptatum eveniet possimus. Nostrum.',
      variables: ['a', 'b', 'c', 'd'],
      calculation: 'a+b+c+d',
      expression: 'a + b + c + d',
      selected: false
    },
    {
      name: 'Function 7',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quas error veritatis dolorem iure. Exercitationem asperiores reprehenderit, sunt numquam et explicabo. Illo, corporis reprehenderit fugit incidunt voluptatum eveniet possimus. Nostrum.',
      variables: ['a', 'b', 'c', 'd'],
      calculation: 'a+b+c+d',
      expression: 'a + b + c + d',
      selected: false
    },
    {
      name: 'Function 8',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quas error veritatis dolorem iure. Exercitationem asperiores reprehenderit, sunt numquam et explicabo. Illo, corporis reprehenderit fugit incidunt voluptatum eveniet possimus. Nostrum.',
      variables: ['a', 'b', 'c', 'd'],
      calculation: 'a+b+c+d',
      expression: 'a + b + c + d',
      selected: false
    },
    {
      name: 'Function 9',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quas error veritatis dolorem iure. Exercitationem asperiores reprehenderit, sunt numquam et explicabo. Illo, corporis reprehenderit fugit incidunt voluptatum eveniet possimus. Nostrum.',
      variables: ['a', 'b', 'c', 'd'],
      calculation: 'a+b+c+d',
      expression: 'a + b + c + d',
      selected: false
    },
    {
      name: 'Function 10',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quas error veritatis dolorem iure. Exercitationem asperiores reprehenderit, sunt numquam et explicabo. Illo, corporis reprehenderit fugit incidunt voluptatum eveniet possimus. Nostrum.',
      variables: ['a', 'b', 'c', 'd'],
      calculation: 'a+b+c+d',
      expression: 'a + b + c + d',
      selected: false
    }
  ]

  function createFunctionList (functions) {
    let list_html = "<li className='function'>" + functions[0].name + "</li>";

    for (let i = 1; i < functions.length; i++) {
      list_html += "\n<li className='function'>" + functions[i].name + "</li>";
    }

    return list_html;
  }

  function functionSelected(functions){
    let functionSelected;

    for (let i = 0; i < functions.length; i++) {
      if (functions[i].selected) {
        functionSelected = functions[i];
        return functionSelected;
      }
    }
  }

  const selectedFunction = functionSelected(functions);

  function functionSelectedVariablesHTML (selectedFunction) {
    let variables = "<li className='variable'><span>" + selectedFunction.variables[0] + ":</span> <input type='text' /></li>";

    for (let i = 1; i < selectedFunction.variables.length; i++) {
      variables += "\n<li className='variable'><span>" + selectedFunction.variables[i] + ":</span> <input type='text' /></li>";
    }

    return variables;
  }

  const selectedFunctionVars = functionSelectedVariablesHTML(selectedFunction);

  const function_list_html = createFunctionList(functions);

    return (
      <div>
        <Nav />
        <div className= {funcSelOpen ? 'function_selector fs_open' : 'function_selector'}>
            <ul className='function_list'>
              {parse(function_list_html)}
            </ul>
            <div>
            <span onClick={() => setFuncSelOpen(!funcSelOpen)}><i className = {funcSelOpen ? "uil uil-times pane_btn_close" : "uil uil-times pane_btn_close display_none"}></i></span>
            </div>
        </div>
        <span onClick={() => setFuncSelOpen(!funcSelOpen)}><i className= {!funcSelOpen ? "uil uil-angle-right pane_btn_open" : "uil uil-angle-right pane_btn_open display_none"}></i></span>
        <main className='section container'>
          <h2 className='calculation_title'>{selectedFunction.name}</h2>
          <h3 className='calculation_description'>Description</h3>
          <p>{selectedFunction.description}.</p>
          <ul className='variable_list container'>
            {parse(selectedFunctionVars)}
          </ul>
          <div className='buttons'>
            <button className='button'>Reset</button>
            <button className='button'>Calculate</button>
          </div>
          <h3 className='result'>
            Result: 100.004
          </h3>
        </main>
      </div>
    );
  }
  
  export default Calculator;