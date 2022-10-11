import './App.css';
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import ItemsFounded from './pages/ItemsFounded';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/items/:id' element={<ItemsFounded/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
