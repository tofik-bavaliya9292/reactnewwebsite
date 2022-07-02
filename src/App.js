
import { NavLink } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Main from './Main';

function App() {
  return (

    <>

      <BrowserRouter>

        <div className="design">
          <NavLink exact to='/' style={({ isActive }) => ({color:isActive ? "blue" : "white"}) } > <a>home</a></NavLink>
          <NavLink exact to='/about' style={({ isActive }) => ({ color: isActive ? "blue" : "white" })} > <a>about</a> </NavLink>
          <NavLink exact to='/contact' style={({ isActive }) => ({ color: isActive ? "blue" : "white" })} > <a>contac</a> </NavLink>
          <NavLink exact to='/search' > <a>search</a> </NavLink>
        </div>

        <Main />

      </BrowserRouter>

    </>

  );
}

export default App;
