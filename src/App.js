import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes/routes';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.element;
            return <Route key={index} path={route.path} element={ <Page/> } />
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
