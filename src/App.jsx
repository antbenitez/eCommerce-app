import "./App.css";
import { Routes, Route } from "react-router-dom"
import ProductListPage from "./routes/ProductListPage/ProductListPage";
import TestingPage from "./routes/TestingPage/TestingPage";

function App() {

  return (
    <div>
      <Routes>
        <Route path='ProductListPage' element={ <ProductListPage/> }></Route>
        <Route path='TestingPage' element={<TestingPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
