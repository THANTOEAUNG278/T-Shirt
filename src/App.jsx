import {BrowserRouter,Routes,Route} from "react-router-dom"
import Layout from "./componet/Layout";
import HomePages from "./pages/HomePages";
import Pages from "./pages/Pages";
import PopularPages from "./pages/PopularPages";
import AboutPages from "./pages/Aboout";
const App = () =>{
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element= {<Layout/>}>
      <Route index element= {<HomePages/>} />
      <Route path="page" element= {<Pages/>} />
      <Route path="popular" element={<PopularPages/>} />
      <Route path="about" element= {<AboutPages/>} />
    </Route>
  </Routes>
  </BrowserRouter>
  )
}
export default App;