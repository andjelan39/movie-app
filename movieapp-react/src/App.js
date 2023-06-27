import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';


function App() {
  return (
    <div>
    <NavBar></NavBar>
    <Login></Login>
    <Footer></Footer>
    </div>
  );
}

export default App;
