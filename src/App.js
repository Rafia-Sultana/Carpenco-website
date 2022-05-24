
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Blog/Blog';
import Dashboard from './Dashboard/Dashboard';
import MyServices from './Dashboard/MyServices';
import Review from './Dashboard/Review';
import Home from './Home/Home';
import Navbar from './Home/Shared/Navbar';
import Login from './Login/Login';
import RequireAuth from './Login/RequireAuth';
import SignUp from './Login/SignUp';


function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog></Blog>}></Route>
        <Route path="dashboard" element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<MyServices></MyServices>}></Route>
          <Route path="review" element={<Review></Review>}></Route>

        </Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="signup" element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
