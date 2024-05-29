import { useEffect, useState } from "react";

const NavProducts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPopularPages = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          console.error(`Error: ${response.status} ${response.statusText}`);
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const result = await response.json();
          console.log("Fetched data:", result);
          setData(result);
          setLoading(false);
        } else {
          throw new Error("Response is not JSON");
        }
      } catch (error) {
        console.error("Error loading popular pages:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    loadPopularPages();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="min-h-screen">
      <div className="container mx-auto py-8 grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-3 gap-4">
        {data.map(item => (
          <PhotoCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default NavProducts;

const PhotoCard = ({ data }) => {
  return (
    <div className="relative group cursor-pointer">
      {/* <div className="p-4 bg-gray-100 border-gray-400 rounded-2xl shadow-md transition-all duration-300 ease-in-out transform group-hover:scale-[.9]"> */}
        <div className="text-red-600 font-bold">New</div>
        <img className="w-full object-cover product-card-ratio" src={data.image} alt={data.title} />
        <div>
          <p className="font-bold flex items-center justify-center">{data.title}</p>
          <div className="flex justify-between items-center mx-4 py-3">
            <p>${data.price}</p>
          </div>
          <div className="flex justify-between items-center text-sm">
            <button className="md:text-sm text-red-500">Buy Now</button>
            <button className="md:text-sm text-blue-500">Add To Cart</button>
          </div>
        </div>
      </div>
    // </div>
  );
};
