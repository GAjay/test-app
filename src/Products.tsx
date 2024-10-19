import axios from "axios";
import { useEffect, useState } from "react";

const baseUrl =
  "https://script.google.com/macros/s/AKfycbz2izRv3bqh1hDPnw0zw3JlwsDNqcMYG1yria38z1jEZOjiSJrh_ajaMKc_L_4MAOY/exec";

type responseType = {
  product_name: string;
  product_image: string;
  product_description: string;
};

const Products = () => {
  const [products, setProducts] = useState<Array<responseType>>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await axios.get(
        `${baseUrl}?key=D142EAF3DB9327B6D68B318864CFD&page=1`
      );
      setProducts(response.data.data);
      setLoading(false);
    }
    fetchMyAPI();
  }, []);

  return (
    <div className="bg-white" id="products">
      <div className="mx-auto max-w-2xl px-4 sm:px-6  pb-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center mt-10 mb-10">
          Our Products
        </h2>
        {isLoading && (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10 animate-spin"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
            <h2 className="text-2xl tracking-tight text-gray-900">
              Loading...
            </h2>
          </>
        )}
        {!isLoading && (
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-6">
            {products.map((item) => (
              <div className="group relative max-w-sm bg-white border border-gray-200 rounded-lg shadow pt-10">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md ">
                  <img
                    className="rounded-t-lg"
                    src={item.product_image}
                    alt=""
                  />
                </div>
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-800 capitalize">
                    {item.product_name.toLowerCase()}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-800">
                    {item.product_description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Products;
