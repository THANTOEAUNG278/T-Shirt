import {BrowserRouter,Routes,Route} from "react-router-dom"
import Layout from "./componet/Layout";
import HomePages from "./pages/HomePages";
import Pages from "./pages/Pages";
import Products from "./pages/Products";
import AboutPages from "./pages/Aboout";
const App = () =>{
  return (

  <Routes>
    <Route path="/" element= {<Layout/>}>
      <Route index element= {<HomePages/>} />
      <Route path="page" element= {<Pages/>} />
      <Route path="product" element={<Products/>} />
      <Route path="about" element= {<AboutPages/>} />
    </Route>
  </Routes>

  )
}
export default App;