import { useEffect, useState } from "react";

const PopularPages = () => {
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
    <div>
      <h1>Welcome to Popular Pages</h1>
      <div>
        {data.map((item) => (
          <div key={item.id}>
            <div>{item.title}</div>
            <div>
              <img src={item.image} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularPages;
