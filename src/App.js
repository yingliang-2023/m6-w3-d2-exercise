import './App.css';
import {BrowserRouter as Router, Routes, Route,Link,Outlet} from 'react-router-dom';

function App() {
  return (
   <Router>
    <nav style = {{margin:10}}>
      <Link to='/' style={{padding:5}}>
        Home
      </Link>
      <Link to='/about' style={{padding:5}}>
        About
      </Link>
    </nav>
   {
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
      </Routes>
   }</Router>
  );
}


//Home
function Home(){
  return (
    <div style={{padding:20}}>
    <h2>Home View</h2>
    <p>Nothing herefasdfafawe,faewgaerg</p>
    </div>
  )
};


//About
function About(){
  return (
    <div style={{padding:20}}>
    <h2>About View</h2>
    <p>Nothing here fawe, afwege</p>

    </div>
  )
};
export default App;
