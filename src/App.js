import './App.css';
import {BrowserRouter as Router, Routes, Route,Link,Outlet,useParams} from 'react-router-dom';

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
      <Link to="/posts" style={{padding:5}}>
      Posts
      </Link>
    </nav>
   {
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Posts/>}>
            <Route path="/posts" element={<PostLists />} />
            <Route path=":slug" element={<Post/>} />
          </Route>
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

//Blog post
const BlogPosts = {
  '1':{
    title:'First blog post',
    description:'dafewfae afwrwef g5hset wferwfg shtrh raeg, gergeth ohiokp;f'
  },
  '2':{
    title:'Second blog post',
    description:'faewf aekhl lhkwe fawleuh args'
  }
};

function Posts(){
  return (
    <div style={{padding:20}}>
      <h2>Blog</h2>
      {/*render any matching child*/}
      <Outlet/>
    </div>
  )
}

function Post(){
  const {slug} = useParams();
  const post=BlogPosts[slug];
  const {title,description}=post;

  return (
    <div style={{padding:20}}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

function PostLists(){
  return(
    <ul>
      {Object.entries(BlogPosts).map(([slug,{title}])=>(
        <li key = {slug}>
          <Link to = {`/posts/${slug}`}>
            <h3>{title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  )
}