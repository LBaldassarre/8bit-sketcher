import './Home.css'
import Nav from '../../components/Nav/Nav';
import { Link } from "react-router-dom";

function Home() {
    return (
      <div>
        <Nav />
        <main className='section container'>
          <div className='title'>
            <h1 className='section__title'>Welcome to <span className='italic'>Your Math</span> !</h1>
            <div className='section__subtitle'>
              You can now personalize your calculations and save them for latter.
            </div>
          </div>
          <div className='about'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod placeat neque dignissimos recusandae voluptatum optio similique sint iusto voluptate molestiae quibusdam quaerat ex laudantium doloribus ratione, ad quo! Repellendus, tempore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, temporibus eius voluptatum facere iure voluptate modi iusto. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis quod deserunt nemo ipsam? Vitae voluptas cumque molestiae possimus adipisci quisquam suscipit eaque. Eligendi dolores, doloremque aliquid molestias totam iure cumque.
          </div>
          <div className='home_btns'>
            <Link className="button" to="/account">
                  Log In / Sing Up
            </Link>
            <Link className="button" to="/calculator">
                  Continue as Guest
            </Link>   
          </div>
        </main>
      </div>
    );
  }
  
  export default Home;