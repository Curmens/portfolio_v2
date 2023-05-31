// import logo from './logo.svg';
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import './App.css';
import ParallaxScrollSnap from './pages/Blog/Index.jsx';
import Home from './pages/Home/Index.jsx';


const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home />},
    { path: "blog", element: <ParallaxScrollSnap /> },
  ]);
  return routes;
};


const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
