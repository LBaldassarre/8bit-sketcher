import './Calculator.css'
import Nav from '../../components/Nav/Nav';

function Calculator() {
    return (
      <div>
        <Nav />
        <main>
          <div className='function_selector'>
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
          </div>
          <div className='calculation'>
            <h2 className='calculation_title'>Function 1</h2>
            <h3 className='calculation_description'>Description</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quas error veritatis dolorem iure. Exercitationem asperiores reprehenderit, sunt numquam et explicabo. Illo, corporis reprehenderit fugit incidunt voluptatum eveniet possimus. Nostrum.</p>
            <ul className='variable_list'>
              <li className='variable'>a:</li>
              <li className='variable'>c:</li>
              <li className='variable'>c:</li>
              <li className='variable'>b:</li>
              <li className='variable'>d:</li>
              <li className='variable'>e:</li>
              <li className='variable'>f:</li>
            </ul>
            <div className='buttons'>
              <button className='btn'>Reset</button>
              <button className='btn'>Calculate</button>
            </div>
            <div className='result'>
              Result: 100.004
            </div>
          </div>
        </main>
      </div>
    );
  }
  
  export default Calculator;