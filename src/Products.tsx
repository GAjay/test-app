import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./Loader";

const baseUrl =
"https://script.google.com/macros/s/AKfycbxGa0l_k5yADsm1r3VpPIVqsgh55Roc4IXWwxZWaGbKnP-fe1-aIQefKnigMCpvVbk/exec"
type responseType = {
  product_name: string;
  product_image: string;
  product_description: string;
};

const Products = ({sheetNo=0}) => {
  const [products, setProducts] = useState<Array<responseType>>([]);
  const [isLoading, setLoading] = useState(true);
  const [nextPage, setNextPage] = useState(1)
  const [inlineLoading,setInLineLoading]=useState(true)

  async function fetchMyAPI() {
    setInLineLoading(true)
    const response = await axios.get(
      `${baseUrl}?key=D142EAF3DB9327B6D68B318864CFD&page=${nextPage}&sheetNo=${sheetNo}`
    );
    setProducts([...products,...response.data.data]);
    setNextPage(response.data.pages.next)
    setLoading(false);
    setInLineLoading(false)
  }


  useEffect(() => {
    setProducts([])
    setNextPage(1)
    fetchMyAPI();
  }, [sheetNo]);

  return (
    <div className="bg-white" id="products">
      <div className="mx-auto max-w-2xl px-4 sm:px-6  pb-24 lg:max-w-7xl lg:px-8 justify-center ">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center mt-10 mb-10">
          Our Products
        </h2>
        {isLoading && <Loader/>}
        {!isLoading && (
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-6 ">
            {products.map((item) => (
              <div className="group relative max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md ">
                  <img
                    className="rounded-t-lg aspect-square object-cover w-full"
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
        
        <div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
  
        {(nextPage!==null && nextPage!==1 && !inlineLoading)&&<button className="mt-10 text-3xl inline-flex rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80"
      onClick={fetchMyAPI}>Load More</button>
    }
      {inlineLoading&& !isLoading&& <Loader/>}
      </div>
     
      </div>
    </div>
  );
};
export default Products;
