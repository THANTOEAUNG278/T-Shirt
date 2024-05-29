import { useEffect, useState } from "react";

const NavProducts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    let componentMounted = true;
    const loadPopularPages = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        const products = await response.json();
        setData(products);
        setFilter(products);
        setLoading(false);
      }
    }
    loadPopularPages();

    return () => {
      componentMounted = false;
    }
  }, []);

  const filterProducts = (category) => {
    if (category === 'All') {
      setFilter(data);
    } else {
      const updatedList = data.filter(item => item.category === category);
      setFilter(updatedList);
    }
  };

  return (
    <>
      <div>
        {loading ? <Loading /> : <ShowProducts filter={filter} filterProducts={filterProducts} />}
      </div>
    </>
  );
};

const PhotoCard = ({ data }) => {
  return (
    <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-lg hover:scale-105">
      <div className="relative">
        <img className="w-full h-64 object-cover" src={data.image} alt={data.title} />
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-gray-900 text-lg truncate">{data.title}</h3>
        <p className="text-gray-700 mt-2">${data.price}</p>
        <div className="mt-4 flex justify-center">
          <button className="text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg transition">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

const ShowProducts = ({ filter, filterProducts }) => {
  return (
    <>
      <div className="flex gap-3 justify-center items-center text-xl font-bold mb-5 py-5">
        <button className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-indigo-300 transition" onClick={() => filterProducts('All')}>All</button>
        <button className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-indigo-300 transition" onClick={() => filterProducts("men's clothing")}>Men's Clothing</button>
        <button className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-indigo-300 transition" onClick={() => filterProducts("women's clothing")}>Women's Clothing</button>
        <button className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-indigo-300 transition" onClick={() => filterProducts('jewelery')}>Jewelery</button>
        <button className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-indigo-300 transition" onClick={() => filterProducts('electronics')}>Electronics</button>
      </div>
      <div className="min-h-screen bg-gray-100 py-10">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filter.map(item => (
            <PhotoCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </>
  );
};

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      Loading...
    </div>
  );
};

export default NavProducts;
