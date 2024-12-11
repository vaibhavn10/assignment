import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Tools({ search, setSearch, filter, setFilter }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState(search);
  const [barcode, setBarcode] = useState("");
  let filterOptions = [
    "Beverages",
    "Breakfasts",
    "Cereal",
    "Snacks",
    "Sodas",
    "Sweets",
    "Water",
  ];
  return (
    <div className="flex flex-wrap w-full items-center space-y-4 space-x--8">
      <div className="flex items-center gap-4 w-full md:w-1/2">
        <input
          type="text"
          className="py-2 w-full md:w-1/2 text-sm font-medium rounded-full"
          placeholder="Search..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            // setSearch(e.target.value);
            if (e.target.value.length == 0) {
              setSearch("");
            }
          }}
        />
        <button
          className="px-8 py-2 rounded-full text-sm text-white bg-red-500 hover:bg-red-600"
          onClick={() => {
            setSearch(query);
          }}
        >
          <span className="block md:hidden"><i className="fa-solid fa-magnifying-glass"></i></span>
          <span className="hidden md:block">Search</span>
        </button>
      </div>
      <div className="flex items-center justify-end gap-4 flex-1">
        <input
          type="text"
          className="py-1 w-32 text-xs font-medium rounded-sm"
          placeholder="Enter barcode..."
          value={barcode}
          onChange={(e) => {
            setBarcode(e.target.value);
          }}
        />
        <button
          className="px-4 py-1 rounded-sm text-sm text-white bg-red-500 hover:bg-red-600"
          onClick={() => {
            navigate(`/product/${barcode}`);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex items-center flex-1 justify-end gap-6">
        <div className="flex items-center justify-end dropdown">
          <button className="flex items-center justify-end gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 cursor-pointer duration-200 dropdown-btn">
            <i className="fa-solid fa-sort"></i>
            Sort by
          </button>
          <div className="dropdownMenu duration-200 flex flex-col w-max bg-white">
            <div className="text-sm cursor-pointer py-1.5 px-2 hover:bg-red-500 hover:text-white duration-200">
              Product name (A-Z, Z-A)
            </div>
            <div className="text-sm cursor-pointer py-1.5 px-2 hover:bg-red-500 hover:text-white duration-200">
              Nutrition grade (Ascending)
            </div>
            <div className="text-sm cursor-pointer py-1.5 px-2 hover:bg-red-500 hover:text-white duration-200">
              Nutrition grade (Descending)
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-2">
          <button
            className="flex items-center justify-end gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 cursor-pointer duration-200"
            onClick={(e) => {
              const filterSidebar = e.target.nextSibling;
              if (filterSidebar.style.right == "0px") {
                filterSidebar.style.right = "-100%";
              } else {
                filterSidebar.style.right = "0px";
              }
            }}
          >
            <i className="fa-solid fa-filter"></i>
            Filters
          </button>
          <div className="h-screen w-3/4 md:w-1/4 fixed right-[-100%] top-0 bg-white flex py-4 px-6 border-l flex-col duration-200">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-medium ">Filters</h3>
              <i
                className="fa-solid fa-xmark cursor-pointer"
                onClick={(e) => {
                  const filterSidebar = e.target.parentElement.parentElement;
                  filterSidebar.style.right = "-100%";
                }}
              ></i>
            </div>
            <div className="flex flex-col gap-2 mt-16">
              {filterOptions.map((filterName, idx) => {
                return (
                  <div className="flex items-center gap-2" key={idx}>
                    <input
                      type="checkbox"
                      value={filterName}
                      checked={filter == filterName}
                      onChange={() => {
                        setFilter(filterName);
                      }}
                      className="scale-[70%]"
                    />
                    <div
                      className={`text-sm cursor-pointer ${
                        filter == filterName ? "text-red-500" : "text-gray-800"
                      }`}
                      onClick={() => {
                        console.log(filter == filterName);
                        setFilter(filterName);
                      }}
                    >
                      {filterName}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-16">
              <button
                onClick={() => {
                  setFilter("");
                }}
                className="text-sm py-2 px-8 border rounded-full "
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tools;
