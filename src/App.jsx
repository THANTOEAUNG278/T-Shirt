import { Routes, Route } from "react-router-dom";
import Layout from "./componet/Layout";
import HomePages from "./pages/HomePages";
import Pages from "./pages/Pages";
import Products from "./pages/Products";
import AboutPages from "./pages/Aboout";
import Product from "./pages/Product";
import NavProducts from "./pages/NavProduct";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePages />} />
        <Route path="page" element={<Pages />} />
        <Route path="products" element={<Products />}>
          <Route index element={<NavProducts />} /> {/* Render NavProducts on /products */}
          <Route path="product/:id" element={<Product />} /> {/* Render Product on /products/product/:id */}
        </Route>
        <Route path="about" element={<AboutPages />} />
      </Route>
    </Routes>
  );
};

export default App;
