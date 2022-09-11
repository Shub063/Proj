import './App.css';
//import Home from './components/Home';
import Register from './components/Register';
import {Routes , Route} from "react-router-dom";
import Topics from './components/Topics';
import Error404 from './components/Error404';
import ComputerScience from './components/Topics/ComputerScience';


function App() {
  return (
    <>
    <Topics/>
    <Routes>
      <Route path="/register" element = {<Register/>} exact/>
      <Route path="/topics" element = {<Topics/>} exact />
      <Route path ="*" element = {<Error404/>}/>
      <Route path="/cs" element = {<ComputerScience/>} exact/>
    </Routes>
    </> 
  );
};

export default App;
