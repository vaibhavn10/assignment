import { useState } from "react";
import Tools from "./Tools";
import { useEffect } from "react";
import Card from "./Card";
import Spinner from "./Spinner";

function Homepage() {
  const [jsonData, setJsonData] = useState([]);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(24);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const fetchData = async () => {
    setLoading(true);
    setJsonData([])
    // console.log("search", search);
    let url = `https://world.openfoodfacts.org/cgi/search.pl?page=${page}&page_size=${size}&search_terms=${search}&json=true`;
    if (filter.length > 0) {
      url = `https://world.openfoodfacts.org/category/${filter}.json?page_size=${size}`;
    }
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      setJsonData(data.products || []); // Safely set products from the API response
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [size, search, filter]);


  const loadMore = () => {
    setSize(size + 24);
  };

  return (
    <div className="flex flex-col px-4 md:px-16 py-4 relative">
      <div className="fixed bottom-4 right-4">
        <button
          className="relative p-6 rounded-full bg-red-500 text-white opacity-100 md:opacity-50 hover:opacity-100 flex items-center justify-center duration-200"
          onClick={() => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          }}
        >
          <i className="fa-solid fa-chevron-up h-4 w-4 absolute m-0"></i>
        </button>
      </div>
      <Tools search={search} setSearch={setSearch} setFilter={setFilter} filter={filter}/>
      <div className="mt-12">
        <h2 className="text-3xl font-medium py-4 pl-8 bg-red-500 text-white border-sm mb-8">
          Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-8">
          {jsonData &&
            jsonData.map((product, idx) => {
              return <Card product={product} idx={idx} key={idx}/>;
            })}
        </div>
        {loading && <Spinner />}
        <div className="flex items-center justify-center mt-8 mb-4">
          <button
            className="py-2 px-6 rounded-sm bg-red-500 hover:bg-red-700 duration-200 text-sm text-white"
            onClick={() => {
              loadMore();
            }}
          >
            Load More...
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
