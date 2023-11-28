import "./App.css";
import { Routes, Route } from "react-router-dom"
import ProductListPage from "./routes/ProductListPage";

function App() {

  return (
    <div>
      <Routes>
        <Route path='ProductListPage' element={ <ProductListPage/> }></Route>
      </Routes>
    </div>
  );
}

export default App;
